import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET_STATUS'

let initialState = {
  feedbackData: [
    {id: 1, message: 'How are you?'},
    {id: 2, message: ' are you?'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'How are you?'},
  ],
  profile: null,
  status: ''
}
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText
      };
      return {
        ...state,
        feedbackData: [...state.feedbackData, newPost],
      }
      break;

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
      break;
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }
      break;
  }
  return state;
};
export let addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setStatus = (status) => ({type: SET_STATUS, status})

export let getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data))
}
export let getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data))
}
export let updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}