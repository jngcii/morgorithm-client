import { API_URL } from "../../constants";
import { actionCreators as solsActions } from "./solution";

const SAVE_PROFILE = "SAVE_PROFILE";
const DROP_TOKEN = "DROP_TOKEN";
const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER';

// action creators

function saveProfile(profile) {
  return { type: SAVE_PROFILE, profile };
}

function dropToken() {
  return { type: DROP_TOKEN };
}

function saveCurrentUser(profile) {
  return { type: SAVE_CURRENT_USER, profile };
}


// API
function signIn(email, password) {
  return async function(dispatch) {
    const res = await fetch(`${API_URL}/users/sign-in/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then(res => {
        if (res.status === 200) return res.json();
        else return false;
      })
      .then(json => {
        if (json && json.token) {
          dispatch(saveProfile(json));
          dispatch(saveCurrentUser(json));
          dispatch(solsActions.getQuestions(json.id));
          return true;
        } else return false;
      })
      .catch(() => false);

    return res;
  };
}

function signUp(email, username, name, password) {
  return async function(dispatch) {
    const res = await fetch(`${API_URL}/users/sign-up/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, name, password })
    })
    .then(res => {
      if (res.status === 201) return res.json();
      else return false;
    })
    .then(json => {
      if (json && json.token){
        dispatch(saveProfile(json));
        dispatch(saveCurrentUser(json));
        dispatch(solsActions.getQuestions(json.id));
        return true;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
}

function signOut() {
  return function(dispatch) { dispatch(dropToken()); }
}

function sendConfirmCode(email) {
  return async function() {
    const res = await fetch(`${API_URL}/users/send-confirm-code/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    })
    .then(res => {
      if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (json && json.confirm_code) return json.confirm_code;
      else return null;
    })
    .catch(() => null);

    return res;
  };
}

function checkUnique(email=null, username=null) {
  return async function() {
    const res = await fetch(`${API_URL}/users/check-unique/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: email ? JSON.stringify({ email }) : JSON.stringify({ username })
    })
    .then(res => {
      if (res.status === 200) return true
      else return false;
    })
    .catch(()=>false);

    return res;
  };
}

function getUser(userId) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/get-user/${userId}/`, {
      headers: { "Authorization": `Token ${token}` }
    })
    .then(res => {
      if (res.status === 401) signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json && json.id) {
        dispatch(saveCurrentUser(json));
        return json;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
}



// initial state

const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_PROFILE:
      return applySetProfile(state, action);
    case DROP_TOKEN:
      return applyDropToken();
    case SAVE_CURRENT_USER:
      return applySetCurrentUser(state, action);
    default:
      return state;
  }
}

// reducer functions

function applySetProfile(state, action) {
  const { profile: { token, id, username, name, email, group, problem_groups, problems_count, solved_problems_count, questions_count } } = action;

  localStorage.setItem("token", token);
  return {
    ...state,
    isLoggedIn: true,
    token,
    profile: { id, username, name, email, group, problem_groups, problems_count, solved_problems_count, questions_count }
  };
}

function applySetCurrentUser(state, action) {
  const { profile: { token, id, username, name, email, group, problems_count, solved_problems_count, questions_count } } = action;

  localStorage.setItem("token", token);
  return {
    ...state,
    currentUser: { id, username, name, email, group, problems_count, solved_problems_count, questions_count }
  };
}

function applyDropToken() {
  localStorage.clear();
  return { isLoggedIn: false };
}


// exports

const actionCreators = {
  signIn,
  signOut,
  sendConfirmCode,
  checkUnique,
  signUp,
  getUser,
};

export { actionCreators };

// reducer export

export default reducer;