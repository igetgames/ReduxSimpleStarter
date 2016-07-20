import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  static propTypes = {
    fetchMessage: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
  }

  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return <div>{this.props.message}</div>;
  }
}

function mapStateToProps(state) {
  return {
    message: state.feature.message
  };
}

export default connect(mapStateToProps, actions)(Feature);
