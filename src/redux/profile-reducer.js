let ADD_POST = "ADD-POST";

let CHANGE_POST = "CHANGE-POST";

let initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body:
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
  ],

  infodata: [
    { name: "First name", value: "Aleks" },
    { name: "Last name", value: "Johns" },
    { name: "Email", value: "test@gmail.com" },
    { name: "Phone", value: "1234567890" }
  ],

  newPostText: "test1"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let stateCopy = {
        ...state,
        newPostText: " ",
        posts: [...state.posts, { id: 5, title: state.newPostText }]
      };
      return stateCopy;

    case CHANGE_POST: {
      let stateCopy = { ...state, newPostText: action.text };
      return stateCopy;
    }

    default:
      return state;
  }
};

export const actionCreatorAddPost = () => {
  return { type: ADD_POST };
};

export const actionCreatorChangePost = text => {
  return { type: CHANGE_POST, newText: text };
};

export default profileReducer;
