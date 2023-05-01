import React from "react";
import PropTypes from "prop-types";

function CoffeeForm(props) {

  const { type} = props;

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className="row">
          <div className="col-md-6 mb-3">
            Burlap Sack Type: <input
              type='text'
              name='type'
              placeholder='Type'
              defaultValue={type} />
          </div>
        </div>
        <button className="mb-3" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

CoffeeForm.popTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default CoffeeForm;