const ADD_MESSAGE = 'dialog/ADD-MESSAGE'

let initialState = {
  dialogsData: [
    {
      name: 'Denchik',
      id: 1,
      scr: 'https://vraki.net/sites/default/files/styles/news_full/public/inline/images/5_106.jpg?itok=P5MxnsNc'
    },
    {
      name: 'Maks',
      id: 2,
      scr: 'https://vraki.net/sites/default/files/styles/news_full/public/inline/images/5_106.jpg?itok=P5MxnsNc'
    },
    {
      name: 'den',
      id: 3,
      scr: 'https://vraki.net/sites/default/files/styles/news_full/public/inline/images/5_106.jpg?itok=P5MxnsNc'
    },
    {
      name: 'Inna',
      id: 4,
      scr: 'https://vraki.net/sites/default/files/styles/news_full/public/inline/images/5_106.jpg?itok=P5MxnsNc'
    },
    {
      name: 'Vika',
      id: 5,
      scr: 'https://vraki.net/sites/default/files/styles/news_full/public/inline/images/5_106.jpg?itok=P5MxnsNc'
    }
  ],
  messagesData: [
    {message: 'Hi,how are you?', id: 1},
    {message: 'hey', id: 2},
    {message: 'nice', id: 3},
    {message: 'you?', id: 4},
  ],


}
export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: action.newMessageBody
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],

      }
      break;

  }
  return state;
}
export let addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})
