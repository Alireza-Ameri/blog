import React from "react";

import "./Post.css";

const Post = (props) => {
  return (
    <div className="post" onClick={props.click}>
      <h3> title </h3>
      <span>{props.title}</span>
      <div> author : {props.author}</div>
    </div>
  );
};

export default Post;
