import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

const UPDATE_PROBLEMS = "UPDATE_PROBLEMS";

// action creators

function updateProblems(problems) {
  return { type: UPDATE_PROBLEMS, problems };
}



// API

// json이 있으면 getProblem API ㄱㄱ
function copyProblems() {
  return async function(dispatch, getState) {
    const { user: {
      token,
      profile: {
        id: userId
      }
    } } = getState();
    const res = await fetch(`${API_URL}/probs/copy-and-get-probs/`, {
      headers: { "Authorization": `Token ${token}` }
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 201) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        dispatch(updateProblems(json));
        dispatch(userActions.getUser(userId));
        return true;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
}

function getProblems(group=[], category=[], level=[], solved=[], keyword="") {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/probs/get-problems/`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ group, category, level, solved, keyword })
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        dispatch(updateProblems(json));
        return json;
      } else return false;
    })
    .catch(() => false);

    return res;
  }
}


// initial state

const initialState = {};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROBLEMS:
      return applyUpdateProblems(state, action);
    default:
      return state;
  }
}

// reducer functions

function applyUpdateProblems(state, action) {
  const { problems } = action;

  return {
    ...state,
    problemList: problems
  };
}



const actionCreators = {
  copyProblems,
  getProblems,
};

export { actionCreators };

// reducer export

export default reducer;