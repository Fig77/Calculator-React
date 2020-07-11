import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, wide, color }) => {
  
  const  inline = () => {
    let w = '25%';
    let c = '#ff5722';
    if (wide) { w = '50%';  }
    if (color) { c=color; }
    return {
      background: c,
      width: w
    };
  };
  
  return (
  <button className="button" style={inline()} type="button" value={value}>{value}</button>
);
}




Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
