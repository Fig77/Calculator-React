import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {  
    
  const {
      name, value, handleClick, wide, color,
    } = this.props;
    
  const inline = () => {
    let w = '25%';
    let c = '#ff8e22';
    if (wide) { w = '50%';  }
    if (color) { c=color; }
    return {
      background: c,
      width: w
    };
  };
    
const handler = (e) =>{
  handleClick(e.target.name);
}

return (
  <button name={name} className="button border" onClick={handler} style={inline()} type="button" value={value}>{value}</button>
  );
 };
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string
};
export default Button;


