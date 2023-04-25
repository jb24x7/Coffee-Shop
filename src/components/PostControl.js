import React from "react";
import PostList from "./PostList";
// import NewProductForm from "./NewProductForm";
// import ProductDetail from "./ProductDetail";
// import ProductList from "./ProductList";
// import PropTypes from "prop-types";

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    currentlyVisibleState = <PostList /> 
    buttonText="New post"

    return (
      <React.Fragment>
        {/* <PostList></PostList> */}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


export default PostControl;
