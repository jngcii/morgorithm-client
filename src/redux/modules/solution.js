import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";
const UPDATE_SOLUTIONS = "UPDATE_SOLUTIONS";
const UPDATE_CURRENT_SOLUTION = "UPDATE_CURRENT_SOLUTION";

// action creators

function updateQuestions(questionList) {
  return { type: UPDATE_QUESTIONS, questionList };
}

function updateSolutions(solutionList) {
  return { type: UPDATE_SOLUTIONS, solutionList };
}

function updateCurrentSolution(currentSolution) {
  return { type: UPDATE_CURRENT_SOLUTION, currentSolution };
}


// API

// json이 있으면 getProblem API ㄱㄱ

function getQuestions(username) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-questions/${username}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        dispatch(updateQuestions(json));
        return json;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
}

function getSolutions(username) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-solutions/${username}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        dispatch(updateSolutions(json));
        return json;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
}

function getProblemsQuestions(originId) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-problems-questions/${originId}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        dispatch(updateQuestions(json));
        return json;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
}

function getProblemsSolutions(originId) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-problems-solutions/${originId}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        dispatch(updateSolutions(json));
        return json;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
}

function getCurrentSolution(solutionId) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-solution/${solutionId}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        dispatch(updateCurrentSolution(json));
        return json;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
}


// initial state

const initialState = {};


// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUESTIONS:
      return applyUpdateQuestions(state, action);
    case UPDATE_SOLUTIONS:
      return applyUpdateSolutions(state, action);
    case UPDATE_CURRENT_SOLUTION:
      return applyUpdateCurrentSolution(state, action);
    default:
      return state;
  }
}

// reducer functions

function applyUpdateQuestions(state, action) {
  const { questionList } = action;

  return { ...state, questionList };
}

function applyUpdateSolutions(state, action) {
  const { solutionList } = action;

  return { ...state, solutionList };
}

function applyUpdateCurrentSolution(state, action) {
  const { currentSolution } = action;

  return { ...state, currentSolution };
}


const actionCreators = {
  getQuestions,
  getSolutions,
  getProblemsQuestions,
  getProblemsSolutions,
  getCurrentSolution,
};

export { actionCreators };

// reducer export

export default reducer;