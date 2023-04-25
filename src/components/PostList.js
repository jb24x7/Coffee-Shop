import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const postList = [
  {
    title: "This is the title",
    userName: "Jon P. Weinerstein",
    // time=
    votes: 3,
    body: "This is the body fo the post"
  },
  {
    title: "Second title",
    userName: "Joseph J. Johnson",
    // time=
    votes: 420,
    body: "Super cool awesome post"
  }
];

function PostList(props) {

  return (
    <React.Fragment>
      {postList.map((post, index) =>
        <Post
          title={post.title}
          userName={post.userName}
          votes={post.votes}
          body={post.body}
          key={index} />
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;