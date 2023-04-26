import React, { useState } from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetails";
import Form from "./Form";


function PostControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedPost, setSelectedPost] = useState(false);
  const [mainPostList, setMainPostList] = useState([]);

  const handleClick = () => {
    if (selectedPost != null) {
      setFormVisibleOnPage(false);
      setSelectedPost(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleAddingNewPostToList = (newPost) => {
    const newMainPostList = mainPostList.concat(newPost);
    setMainPostList(newMainPostList);
    setFormVisibleOnPage(false);
  };

  const handleChangeSelectedPost = (id) => {
    const selection = mainPostList.filter(post => post.id === id)[0];
    setSelectedPost(selection);
  };

  const handleVotesClick = (id, num) => {
    const selection = mainPostList.filter(post => post.id === id)[0];
    const index = mainPostList.indexOf(selection);
    selection.votes += num;
    const newMainPostList = mainPostList.splice(index, 1, selection)
    setMainPostList(newMainPostList);
  }


  let currentlyVisibleState = null;
  let buttonText = null;

  if (selectedPost) {
    currentlyVisibleState =
      <PostDetail 
      post={selectedPost}
      />;
    buttonText = "Return to list";
  } else if (formVisibleOnPage) {
    currentlyVisibleState =
      <Form onNewPostCreation={handleAddingNewPostToList}
      />;
    buttonText = "Return to list";
  } else {
    currentlyVisibleState = <PostList
      onPostSelection={handleChangeSelectedPost}
      onVotesClick={handleVotesClick}
    postList={mainPostList} />;
    buttonText = "New post";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default PostControl;
