import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='headline'
          placeholder='Headline News' />
        <input
          type='text'
          name='author'
          placeholder='Author name ' />
        <textarea
          name='textArea'
          placeholder='News Contents' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>

  )
}


ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;