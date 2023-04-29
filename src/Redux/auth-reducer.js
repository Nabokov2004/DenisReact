import {authAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:

      return {
        ...state,
        ...action.payload,

      }
    default:
      return state;
  }

}
export let setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {id, email, login, isAuth}
});
export let getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }

}
export let login = (email, password, rememberMe, setStatus) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, setStatus);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  }
}
export let logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}
export default authReducer;