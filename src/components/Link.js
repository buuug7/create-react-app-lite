import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const Link = ({ onClick, children }) => {
  return (
    <button
      className='Link'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  };
};

export default connect(null, mapDispatchToProps)(Link);