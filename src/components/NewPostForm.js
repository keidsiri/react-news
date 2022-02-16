import React from "react";
import ProTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props) {
  
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      headline: event.target.headline.value, 
      textArea: event.target.textArea.value, 
      author: event.target.author.value, 
      id: v4()
    });
  }
  
return (
  <React.Fragment>
    <form onSubmit={handleNewPostFormSubmission}>
      <input
      type='text'
      name='headline' 
      placeholder="Post Title" />
      <textarea
      name='textArea'
      placeholder="Write your Post..." />
      <input
      type='text'
      name='author'
      placeholder='Author' />
    <button type='submit'>Add Post</button>
    </form>

  </React.Fragment>
  );
}

NewPostForm.prototype = {
  onNewPostCreation: ProTypes.func
};

export default NewPostForm;