import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
  <div className="display calculator d-flex justify-c-end align-i-center border">
    <h1 className="display-text">{result}</h1>
  </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0'
};

export default Display;