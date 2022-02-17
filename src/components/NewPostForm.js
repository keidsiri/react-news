import React from "react";
import ProTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

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
    <ReusableForm
    formSubmissionHandler = {handleNewPostFormSubmission}
    buttonText="Add new post" />
  </React.Fragment>
  );
}

NewPostForm.prototype = {
  onNewPostCreation: ProTypes.func
};

export default NewPostForm;