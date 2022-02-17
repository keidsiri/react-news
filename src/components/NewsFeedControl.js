import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from './PostList'
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';


class NewsFeedControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null,
      editing: false
    }
  }

handleClick = () => {
  if (this.state.selectedPost != null) {
    this.setState({
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    });
  } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }
}

handleAddingNewPostToList = (newPost) => {
  const newMainPostList = this.state.mainPostList.concat(newPost);
  this.setState({
    mainPostList: newMainPostList,
    formVisibleOnPage: false
  });
}

handleChangingSelectedPost = (id) => {
  const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];  
  this.setState({selectedPost: selectedPost});
}

handleDeletingPost = (id) => {
  const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);//creating a new main post list without the deleted post
  this.setState({
    mainPostList: newMainPostList,
    selectedPost: null
  });
}

handleEditingPostInList = (postToEdit) => {
  const editedMainPostList = this.state.mainPostList
    .filter(post => post.id !== this.state.selectedPost.id)
    .concat(postToEdit);
  this.setState({
    mainPostList: editedMainPostList,
    editing: false,
    selectedPost: null
  });
}


handleLike = (id) => {
  let selectedPost = this.state.mainPostList.find(post => post.id === id);
  selectedPost.like++;
  
  const newMainPostList = this.state.mainPostList.map((post)=> {return post.id === id ? selectedPost : post});
  this.setState({mainPostList: newMainPostList});
}
  

handleEditClick = () => {
  console.log("handleEditClick reached!");
  this.setState({editing: true});
}

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = <EditPostForm 
        post = {this.state.selectedPost} 
        onEditPost = {this.handleEditingPostInList} />
        buttonText = "Return to Post List";
    } else if (this.state.selectedPost != null) {  //if we click on one of the posts then it's going to select that post(by id) and show the details
      currentlyVisibleState =
      <PostDetail 
        post = {this.state.selectedPost} 
        onClickingDelete = {this.handleDeletingPost}
        onClickingEdit = {this.handleEditClick}/>
        buttonText = "Return to News feed"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm 
      onNewPostCreation={this.handleAddingNewPostToList}/>
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.state.mainPostList} 
      onPostSelection={this.handleChangingSelectedPost} onLikeClicked = {this.handleLike}/>
      
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>               
    );
  }
}

export default NewsFeedControl;