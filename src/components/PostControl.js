import React from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetails";
import Form from "./Form";
// import NewProductForm from "./NewProductForm";
// import ProductDetail from "./ProductDetail";
// import ProductList from "./ProductList";
// import PropTypes from "prop-types";

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: false
    };
  }

  handleAddingNewPostToList = (newProduct) => {
    const { dispatch } = this.props;
    const { name, price, quantity, imgLink, id } = newProduct;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      quantity: quantity,
      imgLink: imgLink,
      id: id
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
        <Form onNewPostCreation={this.handleAddingNewPostToList}
        />;
      buttonText = "Return to list";
    } else {
      currentlyVisibleState = <PostList />;
      buttonText = "New post";
    }

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
