import React from "react";
import Header from "./Header";
import PostControl from "./PostControl";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="rounded p-3 mt-3 bg-dark">
          <Header />
        </div>
        <div className="mt-3">
          <PostControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
