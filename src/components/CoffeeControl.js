import React, { useContext, useState, useEffect } from "react";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetails";
import NewCoffee from "./NewCoffee";
import EditCoffeeForm from "./EditCoffeeForm";

function CoffeeControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(false);
  const [mainCoffeeList, setMainCoffeeList] = useState([]);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedCoffee != null) {
      setFormVisibleOnPage(false);
      setSelectedCoffee(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleDeletingCoffee = (id) => {
    const newMainCoffeeList = mainCoffeeList.filter(coffee => coffee.id !== id);
    setMainCoffeeList(newMainCoffeeList);
    setSelectedCoffee(null);
  };

  const handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = mainCoffeeList
      .filter(coffee => coffee.id !== selectedCoffee.id)
      .concat(coffeeToEdit);
    setMainCoffeeList(editedMainCoffeeList);
    setEditing(false);
    setSelectedCoffee(null);
  };

  const handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = mainCoffeeList.concat(newCoffee);
    setMainCoffeeList(newMainCoffeeList);
    setFormVisibleOnPage(false);
  };

  useEffect(() => {
    sortCoffeeList();
  }, [mainCoffeeList]); 


  const handleChangeSelectedCoffee = (id) => {
    const selection = mainCoffeeList.filter(coffee => coffee.id === id)[0];
    setSelectedCoffee(selection);
  };

  const handlePoundsClick = (id, num) => {
    const selection = mainCoffeeList.filter(coffee => coffee.id === id)[0];
    const index = mainCoffeeList.indexOf(selection);
    selection.pounds -= num;
    const newMainCoffeeList = mainCoffeeList.slice();
    newMainCoffeeList.splice(index, 1, selection);
    setMainCoffeeList(newMainCoffeeList);
    sortCoffeeList();
  };

  const sortCoffeeList = () => {
    const newMainCoffeeList = Object.values(mainCoffeeList).sort((a, b) => b.pounds - a.pounds);
    setMainCoffeeList(newMainCoffeeList);
  };

  let currentlyVisibleState = null;
  let buttonText = null;

  if (editing) {
    currentlyVisibleState =
      <EditCoffeeForm
        coffee={selectedCoffee}
        onEditCoffee={handleEditingCoffeeInList} />;
    buttonText = "Return to list";
  }
  else if (selectedCoffee != null) {
    currentlyVisibleState =
      <CoffeeDetail
        coffee={selectedCoffee}
        onClickingEdit={handleEditClick}
        onClickingDelete={handleDeletingCoffee} />;
    buttonText = "Return to list";
  } else if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewCoffee
        onNewCoffeeCreation={handleAddingNewCoffeeToList} />;
    buttonText = "Return to list";
  } else {
    currentlyVisibleState = <CoffeeList
      onCoffeeSelection={handleChangeSelectedCoffee}
      onPoundsClick={handlePoundsClick}
      coffeeList={mainCoffeeList} />;
    buttonText = "New coffee";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

// useContext;

export default CoffeeControl;
