import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPages: dialogReducer,
  newsPages: newsReducer
});

let store = createStore(reducers);
window.store = store;

export default store;
