import React from "react";
import {
  actionCreatorAddPost,
  actionCreatorChangePost
} from "../../../../redux/profile-reducer";
import MyPost from "./mypost";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(actionCreatorAddPost());
    },
    changePost: text => {
      dispatch(actionCreatorChangePost(text));
    }
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
