import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {

  return (
    <React.Fragment>
      <h3 onClick={() => props.whenCoffeeClicked(props.id)}>{props.title}</h3>
      <p>User: {props.userName}</p>
      <p>Total votes: {props.votes}</p>
      <p>{props.body}</p>
      <div>
        <button name="up" onClick={() => props.whenVotesClicked(props.id, 1)}>Up</button>
        <button name="down" onClick={() => props.whenVotesClicked(props.id, -1)}>Down</button>
      </div>
      <hr />
    </React.Fragment>
  );
}

Coffee.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string,
  time: PropTypes.object,
  votes: PropTypes.number,
  body: PropTypes.string
};

export default Coffee;