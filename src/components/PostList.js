import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

// const postList = [
//   {
//     title: "This is the title",
//     userName: "Jon P. Weinerstein",
//     // time=
//     votes: 3,
//     body: "This is the body fo the post"
//   },
//   {
//     title: "Second title",
//     userName: "Joseph J. Johnson",
//     // time=
//     votes: 420,
//     body: "Super cool awesome post"
//   }
// ];

function PostList(props) {

  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) =>
        <div className="container">
          <div className="rounded p-3 mt-3 mb-3 bg-dark">
            <Post
              whenPostClicked={props.onPostSelection}
              whenVotesClicked={props.onVotesClick}
              title={post.title}
              userName={post.userName}
              votes={post.votes}
              body={post.body}
              id={post.id}
              key={post.id} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func,
  onVotesClick: PropTypes.func
};

export default PostList;