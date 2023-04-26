import React from "react";
import Form from "./PostForm";
import PropTypes from "prop-types";

function EditPostForm(props) {
  const { post } = props;


  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({ userName: event.target.userName.value, body: event.target.body.value, title: event.target.title.value, votes: post.votes, time: post.time });
  }


  return (
    <React.Fragment>
      <Form
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

export default EditPostForm;

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
};