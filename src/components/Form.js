import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';


function Form(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      userName: event.target.userName.value,
      body: event.target.body.value,
      votes: 0,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Post Name' />
        <input
          type='text'
          name='userName'
          placeholder='user Name' />
        <input
          type='text'
          name='body'
          placeholder='body text' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default Form;