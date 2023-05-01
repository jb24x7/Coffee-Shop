import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="container rounded p-3 mt-3 mb-3 bg-dark">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p name="user"><strong>Coffeeed by: {coffee.userName}</strong></p>
          </div>
          <div>
            <p name="date">Date: {coffee.time}</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 name="title">{coffee.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p name="body">{coffee.body}</p>
            </div>
          </div>
        </div>
        <button onClick={() => onClickingEdit(coffee.id)}>Edit Coffee</button>
        <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button>
      </div>
    </React.Fragment >
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};



export default CoffeeDetail;