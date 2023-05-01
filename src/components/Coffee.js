import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {

  return (
    <React.Fragment>
      <h3 onClick={() => props.whenCoffeeClicked(props.id)}>{props.type}</h3>
      <p>Total pounds: {props.pounds}</p>
      <div>
        <button name="down" onClick={() => props.whenPoundsClicked(props.id, 1)}>Buy this coffee</button>
      </div>
      <hr />
    </React.Fragment>
  );
}

Coffee.propTypes = {
  type: PropTypes.string,
  time: PropTypes.object,
  pounds: PropTypes.number,
};

export default Coffee;