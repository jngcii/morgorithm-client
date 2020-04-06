import { API_URL } from "../../constants";
import { actionCreators as solsActions } from "./solution";

const SAVE_PROFILE = "SAVE_PROFILE";
const DROP_TOKEN = "DROP_TOKEN";
const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER';
const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';
const ADD_USER_GROUP = 'ADD_USER_GROUP';
const REMOVE_USER_GROUP = 'REMOVE_USER_GROUP';
const ADD_PROB_GROUPS = 'ADD_PROB_GROUPS';
const DELETE_PROB_GROUPS = 'DELETE_PROB_GROUPS';
const EDIT_PROFILE = 'EDIT_PROFILE';
const EDIT_AVATAR = 'EDIT_AVATAR';

// action creators

function saveProfile(profile) {
  return { type: SAVE_PROFILE, profile };
};

function dropToken() {
  return { type: DROP_TOKEN };
};

function saveCurrentUser(profile) {
  return { type: SAVE_CURRENT_USER, profile };
};

function setCurrentGroup(currentGroup) {
  return { type: SET_CURRENT_GROUP, currentGroup };
};

function addUserGroup(newGroup) {
  return { type: ADD_USER_GROUP, newGroup};
};

function removeUserGroup(groupId) {
  return { type: REMOVE_USER_GROUP, groupId };
};

function addProbGroups(newGroup) {
  return { type: ADD_PROB_GROUPS, newGroup };
};
function deleteProbGroup(groupId) {
  return { type: DELETE_PROB_GROUPS, groupId };
};

function setEditProfile(username, name) {
  return { type: EDIT_PROFILE, username, name };
};

function setAvatar(avatar) {
  return { type: EDIT_AVATAR, avatar };
}


// API

function authGoogle(credential) {
  return async function(dispatch) {
    const res = await fetch(`${API_URL}/users/google-auth/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential })
    })
    .then(res => {
      if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (json && json.token) {
        dispatch(saveProfile(json));
        dispatch(saveCurrentUser(json));
        dispatch(solsActions.getQuestions(json.username));
        return true;
      } else return false;
    })
    .catch(() => false);

  return res;
  };
}

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
          dispatch(solsActions.getQuestions(json.username));
          return true;
        } else return false;
      })
      .catch(() => false);

    return res;
  };
};

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
        dispatch(solsActions.getQuestions(json.username));
        return true;
      } else return false;
    })
    .catch(() => false);

    return res;
  };
};

function signOut() {
  return function(dispatch) { dispatch(dropToken()); }
};

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
};

function changePassword(old_password, new_password) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/change-password/`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ old_password, new_password })
    })
    .then(res => {
      if (res.status === 401) signOut();
      if (res.status === 200) return true;
      else return false;
    })
    .catch(() => null);

    return res;
  };
};

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
};

function editProfile({ username, name }) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/edit-profile/`, {
      method: "PUT",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, name })
    })
    .then(res => {
      if (res.status === 401) signOut();
      else if (res.status === 200) {
        dispatch(setEditProfile(username, name));
        return true;
      }
      else return false;
    })
    .catch(()=>false);

    return res;
  };
};

function getUser(username) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/get-user/${username}/`, {
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
};

function searchGroup(keyword) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/search-group/${keyword}/`, {
      headers: { "Authorization": `Token ${token}` }
    })
    .then(res => {
      if (res.status === 401) signOut();
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        return json;
      } else return [];
    })
    .catch(() => false);

    return res;
  };
};

function getGroup(groupId) {
  return async function(_, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/get-group/${groupId}/`, {
      headers: { "Authorization": `Token ${token}` }
    })
    .then(res => {
      if (res.status === 401) signOut();
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
};

function createGroup(name, password) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/create-group/`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json"
      },
      body: !!password ? JSON.stringify({ name, password }) : JSON.stringify({ name })
    })
    .then(res => {
      if (res.status === 401) signOut();
      else if (res.status === 201) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {
        dispatch(addUserGroup(json));
        return true;
      } else {
        return false;
      }
    })
    .catch(()=>false);

    return res;
  };
};

function enterGroup(groupId, password) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/enter-group/${groupId}/`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password })
    })
    .then(res => {
      if (res.status === 401) signOut();
      else if (res.status === 404) return res.status;
      else if (res.status === 200) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json && json !== 404) {
        dispatch(addUserGroup(json));
        return true;
      } else if (json === 404) {
        return json;
      } else {
        return false;
      }
    })
    .catch(()=>false);

    return res;
  };
};

function leaveGroup(groupId) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/leave-group/${groupId}/`, {
      headers: { "Authorization": `Token ${token}` }
    })
    .then(res => {
      if (res.status === 401) signOut();
      else if (res.status === 200) {
        dispatch(removeUserGroup(groupId));
        return true;
      } else return false;
    })
    .catch(()=>false);

    return res;
  };
};

function uploadAvatar(data) {
  return async function(dispatch, getState) {
    const { user: { token } } = getState();
    const res = await fetch(`${API_URL}/users/upload-avatar/`, {
      method: "PUT",
      headers: {
        "Authorization": `Token ${token}`,
      },
      body: data
    })
    .then(res => {
      if (res.status === 401) signOut();
      else if (res.status === 201) return res.json();
      else return false;
    })
    .then(json => {
      if (!!json) {dispatch(setAvatar(json)); return true;}
      else return false;
    })
    .catch(() => false);

    return res;
  };
}

function findPassword(email) {
  return async function() {
    const res = await fetch(`${API_URL}/users/find-password/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })
    .then(res => {
      if (res.status === 404) return res.status;
      else if (res.status === 200) return res.status;
      else return 400;
    })
    .catch(() => false);

    return res;
  };
};


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
    case SET_CURRENT_GROUP:
      return applySetCurrentGroup(state, action);
    case ADD_USER_GROUP:
      return applyAddUserGroup(state, action);
    case REMOVE_USER_GROUP:
      return applyRemoveUserGroup(state, action);
    case ADD_PROB_GROUPS:
      return applyAddProbGroups(state, action);
    case DELETE_PROB_GROUPS:
      return applyDeleteProbGroups(state, action);
    case EDIT_PROFILE:
      return applyEditProfile(state, action);
    case EDIT_AVATAR:
      return applyAvatar(state, action);
    default:
      return state;
  }
};

// reducer functions

function applySetProfile(state, action) {
  const { profile: { token, id, username, avatar, name, is_social, email, group, problem_groups, problems_count, solved_problems_count, questions_count } } = action;

  localStorage.setItem("token", token);
  return {
    ...state,
    isLoggedIn: true,
    token,
    profile: { id, username, name, email, avatar, group, is_social, problem_groups, problems_count, solved_problems_count, questions_count }
  };
};

function applySetCurrentUser(state, action) {
  const { profile: { token, id, username, name, avatar, is_social, email, group, problems_count, solved_problems_count, questions_count } } = action;

  localStorage.setItem("token", token);
  return {
    ...state,
    currentUser: { id, username, name, email, avatar, is_social, group, problems_count, solved_problems_count, questions_count }
  };
};

function applyDropToken() {
  localStorage.clear();
  return { isLoggedIn: false };
};

function applySetCurrentGroup(state, action) {
  const { currentGroup } = action;
  return { ...state, currentGroup };
};

function applyAddUserGroup(state, action) {
  const { newGroup } = action;
  return {
    ...state,
    profile: {
      ...state.profile,
      group: [...state.profile.group, newGroup]
    }
  };
};

function applyRemoveUserGroup(state, action) {
  const { groupId } = action;
  const { profile: { group } } = state;
  const new_groups = group.filter(g => {
    if (g.id !== groupId) return g;
  });
  return { ...state, profile: { ...state.profile, group: new_groups } };
};

function applyAddProbGroups(state, action) {
  const { newGroup } = action;
  return {
    ...state,
    profile: {
      ...state.profile,
      problem_groups: [...state.profile.problem_groups, newGroup]
    }
  };
};

function applyDeleteProbGroups(state, action) {
  const { groupId } = action;
  const { profile: { problem_groups } } = state;
  const new_problem_groups = problem_groups.filter(g => {
    if (g.id !== groupId) return g;
  });
  return { ...state, profile: { ...state.profile, problem_groups: new_problem_groups } };
};

function applyEditProfile(state, action) {
  const { username, name } = action;
  const { profile } = state;
  const newProfile = { ...profile, username, name };
  return {
    ...state, profile: newProfile
  };
};

function applyAvatar(state, action) {
  const { avatar: { avatar } } = action;
  const { profile, currentUser } = state;
  const newProfile = { ...profile, avatar };
  const newUser = { ...currentUser, avatar };
  return {
    ...state, profile: newProfile, currentUser: newUser
  };
}


// exports

const actionCreators = {
  authGoogle,
  signIn,
  signOut,
  sendConfirmCode,
  changePassword,
  checkUnique,
  editProfile,
  signUp,
  getUser,
  searchGroup,
  getGroup,
  createGroup,
  enterGroup,
  leaveGroup,
  uploadAvatar,
  findPassword,

  addProbGroups,
  deleteProbGroup
};

export { actionCreators };

// reducer export

export default reducer;