import React from "react";
import Form from "./CoffeeForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      userName: event.target.userName.value,
      body: event.target.body.value,
      title: event.target.title.value,
      votes: coffee.votes,
      time: coffee.time,
      id: coffee.id
    });
  }

  return (
    <React.Fragment>
      <Form
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee"
        userName={coffee.userName}
        body={coffee.body}
        title={coffee.title} />
    </React.Fragment>
  );
}

export default EditCoffeeForm;

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};