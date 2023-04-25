import React from "react";
import PropTypes from "prop-types";

function Post(props) {

  return (
    <React.Fragment>
      <h3 onClick= {() => props.whenPostClicked(props.id)}>{props.title}</h3>
      <p>User: {props.userName}</p>
      <p>Total votes: {props.votes}</p>
      <p>{props.body}</p>
      <div>
        <button name="up">Up</button>
        <button name="down">Down</button>
      </div>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string,
  time: PropTypes.object,
  votes: PropTypes.number,
  body: PropTypes.string
};

export default Post;