import React, { useContext, useState, useEffect } from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetails";
import NewPost from "./NewPost";
import EditPostForm from "./EditPostForm";

function PostControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedPost, setSelectedPost] = useState(false);
  const [mainPostList, setMainPostList] = useState([]);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedPost != null) {
      setFormVisibleOnPage(false);
      setSelectedPost(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleDeletingPost = (id) => {
    const newMainPostList = mainPostList.filter(post => post.id !== id);
    setMainPostList(newMainPostList);
    setSelectedPost(null);
  };

  const handleEditingPostInList = (postToEdit) => {
    const editedMainPostList = mainPostList
      .filter(post => post.id !== selectedPost.id)
      .concat(postToEdit);
    setMainPostList(editedMainPostList);
    setEditing(false);
    setSelectedPost(null);
  };

  const handleAddingNewPostToList = (newPost) => {
    const newMainPostList = mainPostList.concat(newPost);
    setMainPostList(newMainPostList);
    setFormVisibleOnPage(false);
  };

  useEffect(() => { // because useEffect is run after each time the component re-renders so now each time the list is updated (for instance when we add a new post), useEffect will call sortPostLit to reorder the list to include the new post with 0 votes.  Without this it would be concatenated onto the end of the list, below even posts with negative vote totals. 
    sortPostList();
  }, [mainPostList]); // passing in the second argument tells useEffect() to only run when the values in the state array (the second argument) change.


  const handleChangeSelectedPost = (id) => {
    const selection = mainPostList.filter(post => post.id === id)[0];
    setSelectedPost(selection);
  };

  const handleVotesClick = (id, num) => {
    const selection = mainPostList.filter(post => post.id === id)[0];
    const index = mainPostList.indexOf(selection);
    selection.votes += num;
    const newMainPostList = mainPostList.slice();
    newMainPostList.splice(index, 1, selection);
    setMainPostList(newMainPostList);
    sortPostList();
  };

  const sortPostList = () => {
    const newMainPostList = Object.values(mainPostList).sort((a, b) => b.votes - a.votes);
    setMainPostList(newMainPostList);
  };

  let currentlyVisibleState = null;
  let buttonText = null;

  if (editing) {
    currentlyVisibleState =
      <EditPostForm
        post={selectedPost}
        onEditPost={handleEditingPostInList} />;
    buttonText = "Return to list";
  }
  else if (selectedPost != null) {
    currentlyVisibleState =
      <PostDetail
        post={selectedPost}
        onClickingEdit={handleEditClick}
        onClickingDelete={handleDeletingPost} />;
    buttonText = "Return to list";
  } else if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewPost
        onNewPostCreation={handleAddingNewPostToList} />;
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

// useContext;

export default PostControl;
