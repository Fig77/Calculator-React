import React from 'react';
import PropTypes from 'prop-types';

const Display = (prop) => {
  
  const { result } = prop;
  
  return (
    <div>
      <h1>{result}</h1>
    </div>
  ); 
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
