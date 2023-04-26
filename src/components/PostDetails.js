import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="container rounded p-3 mt-3 mb-3 bg-dark">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p name="user"><strong>Posted by: {post.userName}</strong></p>
          </div>
          <div>
            <p name="date">Date: {post.time}</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 name="title">{post.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p name="body">{post.body}</p>
            </div>
          </div>
        </div>
        <button onClick={() => onClickingEdit(post.id)}>Edit Post</button>
        <button onClick={() => onClickingDelete(post.id)}>Delete Post</button>
      </div>
    </React.Fragment >
  );
}

PostDetail.propTypes = {
  post: PropTypes.object
};



export default PostDetail;