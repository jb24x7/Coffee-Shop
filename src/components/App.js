import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="rounded p-3 mt-3 bg-dark">
          <Header />
        </div>
        <div className="mt-3">
          <CoffeeControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
