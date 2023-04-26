import React from "react";
import PropTypes from "prop-types";

function PostForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button className="mb-3" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

PostForm.popTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default PostForm;