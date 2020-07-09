import React from 'react';
import PropTypes from 'prop-types';

const Button = ({value}) => {
  return (
    <button>{value}</button>
  );
  
  Button.propTypes = {
   value: PropTypes.string.isRequired,
  };
}

export default Button;