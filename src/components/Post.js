import React from'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
      <h3>{props.headline} - {props.author} </h3>
      <p><em>{props.textArea}</em></p>
      <hr />
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  headline: PropTypes.string,
  textArea: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;