import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post } = props;
  
  return (
    <React.Fragment>
      <h1>News Detail</h1>
      <h3>{post.headline}</h3>
      <h4><em>{post.author}</em></h4>
      <h5>{post.textArea}</h5>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object
};

export default PostDetail;