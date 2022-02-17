import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.postList.map((post) =>
        <Post 
        whenPostClicked = {props.onPostSelection}
        headline={post.headline}
        textArea={post.textArea}
        author={post.author}
        id={post.id}
        key={post.id}
        like={post.like}
        whenLikeClicked={props.onLikeClicked}/> 
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func,
  onLikeClicked: PropTypes.func
};

export default PostList;


