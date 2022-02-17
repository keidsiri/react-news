import React from'react';
import PropTypes from 'prop-types';

function Post(props){
  if ( props.like === 0){
    return (
      <React.Fragment>
        <h3>HeadLine : {props.headline}</h3>
        <h3>Author by : {props.author}</h3>
        <h3>News Content : {props.textArea}</h3>
        <p>There is no like yet!</p>
        <hr />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div onClick={() => props.whenPostClicked(props.id)}></div>
        <h3>HeadLine : {props.headline}</h3>
        <h3>Author by : {props.author}</h3>
        <h3>News Content : {props.textArea}</h3>
        <p>Likes : {props.like}</p>
        <button onClick={() => props.whenLikeClicked(props.id)}>Like</button>
        <hr />
      </React.Fragment>
    )
  }
}

Post.propTypes = {
  headline: PropTypes.string,
  textArea: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  whenLikeClicked: PropTypes.func,
  like: PropTypes.number
};

export default Post;