import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


function CoffeeList(props) {

  return (
    <React.Fragment>
      {Object.values(props.coffeeList).map((coffee) =>
        <div className="container">
          <div className="rounded p-3 mt-3 mb-3 bg-dark">
            <Coffee
              whenCoffeeClicked={props.onCoffeeSelection}
              whenPoundsClicked={props.onPoundsClick}
              type={coffee.type}
              pounds={coffee.pounds}
              id={coffee.id}
              key={coffee.id} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  onPoundsClick: PropTypes.func
};

export default CoffeeList;