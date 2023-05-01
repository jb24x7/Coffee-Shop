import React from "react";
import Form from "./CoffeeForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      type: event.target.type.value,
      pounds: coffee.pounds,
      time: coffee.time,
      id: coffee.id
    });
  }

  return (
    <React.Fragment>
      <Form
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee"
        type={coffee.type} />
    </React.Fragment>
  );
}

export default EditCoffeeForm;

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};