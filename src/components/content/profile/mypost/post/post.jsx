import React from "react";
import s from "./../mypost.module.css";

const Post = props => {
    return (
      <div>
        <div>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </div>
      </div>
    );
  };

  export default Post;