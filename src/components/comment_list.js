import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
  const list = props.comments.map((text) => <li key={text}>{text}</li>);

  return (
    <ul className="comment-list">
      {list}
    </ul>
  );
};

CommentList.propTypes = {

};

const mapStateToProps = (state) => {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
