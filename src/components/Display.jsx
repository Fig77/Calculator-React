import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
  <div className="display d-flex justify-c-end align-i-center">
    <h1 className="display-text">{result}</h1>
  </div>
  );
};
Display.propTypes = {
  result: PropTypes.string.isRequired,
};


export default Display;