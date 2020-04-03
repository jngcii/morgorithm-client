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

function getSolutionCounts(solutionId) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-solution-counts/${solutionId}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        return json;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
}

function getComments(solutionId) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-comments/${solutionId}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .catch(()=>false);
    return res;
  };
}

function getSubComments(commentId) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-sub-comments/${commentId}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .catch(()=>false);
    return res;
  };
}

function createComment(solution, message) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/comment-api/`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ solution, message })
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 201) return true;
      else return false;
    })
    .catch(() => false);

    return res;
  };
}

function modifyComment(id, message) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/comment-api/`, {
      method: "PUT",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, message })
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return true;
      else return false;
    })
    .catch(() => false);

    return res;
  };
}

function deleteComment(id) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/comment-api/`, {
      method: "DELETE",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id })
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 204) return true;
      else return false;
    })
    .catch(() => false);

    return res;
  };
}

function createSubComment(comment, message) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/sub-comment-api/`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment, message })
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 201) return true;
      else return false;
    })
    .catch(() => false);

    return res;
  };
}

function modifySubComment(id, message) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/sub-comment-api/`, {
      method: "PUT",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, message })
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return true;
      else return false;
    })
    .catch(() => false);

    return res;
  };
}

function deleteSubComment(id) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/sub-comment-api/`, {
      method: "DELETE",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id })
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 204) return true;
      else return false;
    })
    .catch(() => false);

    return res;
  };
}

function getCommentLikes(commentId) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-comment-likes/${commentId}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .catch(() => false);

    return res;
  };
}

function likeComment(commentId) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/like-comment/${commentId}/`, {
      headers: { "Authorization": `Token ${token}` },
    })
    .then(res => {
      if (res.status === 401) userActions.signOut();
      else if (res.status === 200) return true;
      else return false;
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
  getSolutionCounts,
  getComments,
  getSubComments,
  createComment,
  modifyComment,
  deleteComment,
  createSubComment,
  modifySubComment,
  deleteSubComment,
  getCommentLikes,
  likeComment,
};

export { actionCreators };

// reducer export

export default reducer;