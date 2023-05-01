import React from "react";
import PropTypes from "prop-types";
import CoffeeForm from "./CoffeeForm";
import { v4 } from 'uuid';
import { formatDistanceToNow } from 'date-fns';

function NewCoffee(props) {

  function handleNewCoffeeFormSubmission(event) {
    const date = new Date();
    event.preventDefault();
    props.onNewCoffeeCreation({
      type: event.target.type.value,
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
      <CoffeeForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewCoffee.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffee;