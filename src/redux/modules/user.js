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
      .then(response => {
        if (response.status === 200) return response.json();
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
};

export { actionCreators };

// reducer export

export default reducer;