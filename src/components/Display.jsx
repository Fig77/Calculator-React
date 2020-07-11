import React from 'react';
import PropTypes from 'prop-types';

const Display = ({props}) => {
  const { result } = props;
  <div>
    <h1>{result}</h1>
  </div>
};
Display.propTypes = {
  
}

export default Display;