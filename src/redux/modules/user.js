import { API_URL } from "../../constants";

const SAVE_TOKEN = "SAVE_TOKEN";

// action creators

function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token,
  };
}


// API
function signIn(email, password) {
  return async function(dispatch) {
    const res = await fetch(`${API_URL}/users/sign-in/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return false;
        }
      })
      .then(json => {
        if (json && json.token) {
          dispatch(saveToken(json.token));
          return true;
        } else {
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        return false;
      });

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
    case SAVE_TOKEN:
      return applySetToken(state, action);
    default:
      return state;
  }
}

// reducer functions

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("token", token);
  return {
    ...state,
    isLoggedIn: true,
  };
}


// exports

const actionCreators = {
  signIn,
};

export { actionCreators };

// reducer export

export default reducer;