import React from "react";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import { v4 } from 'uuid';
import { formatDistanceToNow } from 'date-fns';

function NewPost(props) {

  function handleNewPostFormSubmission(event) {
    const date = new Date();
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      userName: event.target.userName.value,
      body: event.target.body.value,
      votes: 0,
      id: v4(),
      time: date.toString().slice(4, 15) + " " + date.toLocaleTimeString([], {
        hour: '2-digit', minute: '2-digit' }) + ' (' + formatDistanceToNow(new Date(), {
        addSuffix: true
      }) + ')'
    });
  }

  return (
    <React.Fragment>
      <PostForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPost;