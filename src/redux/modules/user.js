import { API_URL } from "../../constants";

const SAVE_TOKEN = "SAVE_TOKEN";
const DROP_TOKEN = "DROP_TOKEN";

// action creators

function saveToken(token) {
  return { type: SAVE_TOKEN, token };
}

function dropToken() {
  return { type: DROP_TOKEN };
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
          dispatch(saveToken(json.token));
          return true;
        } else return false;
      })
      .catch(() => false);

    return res;
  };
}

function signOut() {
  return function(dispatch) { dispatch(dropToken());}
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

function signUp(email, username, name, password) {
  return async function(dispatch) {
    console.log(email, username, name, password);
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
        dispatch(saveToken(json.token));
        return true;
      } else return false;
    })
    .catch(() => false);

    return res
  }
}

// initial state

const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case DROP_TOKEN:
      return applyDropToken(state);
    default:
      return state;
  }
}

// reducer functions

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("token", token);
  return { ...state, isLoggedIn: true };
  // 여기서 리턴하면 바로바로 적용된다.
  // 리턴 안하면 새로고침 해야 적용된다.
  // 무슨말이나면
  // 로컬 저장소에 토큰은 저장한다.
  // 새로고침하면 당연히 이니셜 스테이트로 인해 가져온다.
}

function applyDropToken(state) {
  localStorage.clear();
  return { ...state, isLoggedIn: false };
}


// exports

const actionCreators = {
  signIn,
  signOut,
  sendConfirmCode,
  checkUnique,
  signUp,
};

export { actionCreators };

// reducer export

export default reducer;