let ADD_MESSAGE = "ADD-MESSAGE";

let CHANGE_MESSAGE = "CHANGE-MESSAGE";

let initinalState = {
  dialogs: [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
    { id: 4, name: "user4" },
    { id: 5, name: "user5" }
  ],

  messages: [
    { id: 1, value: "message1" },
    { id: 2, value: "message2" },
    { id: 3, value: "message3" },
    { id: 4, value: "message4" },
    { id: 5, value: "message5" }
  ],

  newMessageText: "newmessage"
};

const dialogReducer = (state = initinalState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let stateCopy = {
        ...state,
        newMessageText: " ",
        messages: [
          ...state.messages,
          {
            id: 6,
            value: state.newMessageText
          }
        ]
      };

      return stateCopy;
    }

    case CHANGE_MESSAGE: {
      let stateCopy = { ...state, newMessageText: action.newMessage };
      return stateCopy;
    }

    default:
      return state;
  }
};

export const actionCreatorAddMessage = () => {
  return { type: ADD_MESSAGE };
};

export const actionCreatorChangeMessage = text => {
  return { type: CHANGE_MESSAGE, newMessage: text };
};

export default dialogReducer;
