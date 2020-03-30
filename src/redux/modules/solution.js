import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

// action creators

function updateQuestions(questionList) {
  return { type: UPDATE_QUESTIONS, questionList };
}


// API

// json이 있으면 getProblem API ㄱㄱ

function getQuestions(userId) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/sols/get-questions/${userId}/`, {
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
        return true;
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
    default:
      return state;
  }
}

// reducer functions

function applyUpdateQuestions(state, action) {
  const { problemList } = action;

  return { ...state, problemList };
}



const actionCreators = {
  getQuestions,
};

export { actionCreators };

// reducer export

export default reducer;