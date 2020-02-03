import React from "react";
import s from "./mypost.module.css";
import Post from "./post/post";

const MyPost = props => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.changePost(text);
  };

  let postElement = props.posts.map(p => (
    <Post title={p.title} body={p.body} />
  ));


  return (
    <div className={s.myposts}>
      <div>
        <h2>My posts</h2>
        <button onClick={onAddPost}>Add</button>
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        />
      </div>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPost;
