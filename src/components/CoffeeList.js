import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

// const coffeeList = [
//   {
//     type: "This is the type",
//     userName: "Jon P. Weinerstein",
//     // time=
//     votes: 3,
//     body: "This is the body fo the coffee"
//   },
//   {
//     type: "Second type",
//     userName: "Joseph J. Johnson",
//     // time=
//     votes: 420,
//     body: "Super cool awesome coffee"
//   }
// ];

function CoffeeList(props) {

  return (
    <React.Fragment>
      {Object.values(props.coffeeList).map((coffee) =>
        <div className="container">
          <div className="rounded p-3 mt-3 mb-3 bg-dark">
            <Coffee
              whenCoffeeClicked={props.onCoffeeSelection}
              whenVotesClicked={props.onVotesClick}
              type={coffee.type}
              userName={coffee.userName}
              votes={coffee.votes}
              body={coffee.body}
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
  onVotesClick: PropTypes.func
};

export default CoffeeList;