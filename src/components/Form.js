import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';


function Form(props) {
  const date = new Date();
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      userName: event.target.userName.value,
      body: event.target.body.value,
      votes: 0,
      id: v4(),
      time: date.toString().slice(0, 15) + " " + date.toLocaleTimeString()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <div className="row">
          <div className="col-md-6 mb-3">
            Post Title: <input
              type='text'
              name='title'
              placeholder='Title' />
          </div>
          <div className="col-md-6 mb-3">
            Name: <input
              type='text'
              name='userName'
              placeholder='User Name' />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <label style={{ verticalAlign: 'top' }}>Body:</label>
            <textarea
              name='body'
              placeholder='Post text goes here...'
              style={{ width: '80%', rows: '4', resize: 'both' }} />
          </div>
        </div>
        <button className="mb-3" type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default Form;