import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {
  initialized:false
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:

      return {
        ...state,
        initialized: true

      }
    default:
      return state;
  }

}
export let initialisedSuccess = () => ({
  type: INITIALIZED_SUCCESS
});
export let initializeApp = () => (dispatch)=> {/// как сделать acync
  let promise = dispatch(getAuthUserData())
  promise.then(()=>{
    dispatch(initialisedSuccess())
  })





}

export default appReducer;