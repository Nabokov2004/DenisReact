import {deletePost, profileReducer} from "./profile-reducer";

let state ={
  feedbackData: [
    {id: 1, message: 'How are you?'},
    {id: 2, message: ' are you?'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'How are you?'},
  ]
}
test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state,action);
  expect(newState.feedbackData.length).toBe(3)
});