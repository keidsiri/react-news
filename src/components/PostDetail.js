import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete, onClickingEdit} = props;
  
  return (
    <React.Fragment>
      <h1>News Detail</h1>
      <h3>{post.headline}</h3>
      <h4><em>{post.author}</em></h4>
      <h5>{post.textArea}</h5>
      <button onClick={()=> onClickingDelete(post.id) }>Remove Post</button>
      <button onClick={()=> onClickingEdit(post.id) }>Update Post</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;