import React, {Component} from 'react';
import Button from './Button';

const wide = true;
let color = '#ff5722';
class ButtonPanel extends Component {
  
render() {
const { handleClick } = this.props;
const handler = e => {
  handleClick(e);
};
  return ( 
  <div className="calculator">
    <div className="group">
      <Button name="AC" value="AC" color={color} handleClick = {handler} />
      <Button name="+/-" value="+/-" color={color} handleClick = {handler} />
      <Button name="÷" value="÷" color={color} handleClick = {handler} />
      <Button name="%" value="%" color={color} handleClick = {handler} />
    </div>
    <div className="group">
      <Button name="7"value="7" handleClick = {handler} />
      <Button name="8" value="8" handleClick = {handler} />
      <Button name="9" value="9" handleClick = {handler} />
      <Button name="X" value="X" color={color} handleClick = {handler} />
    </div>
    <div className="group">
      <Button name="4" value="4" handleClick = {handler} />
      <Button name="5" value="5" handleClick = {handler} />
      <Button name="6" value="6" handleClick = {handler} />
      <Button name="-" value="-" color={color} handleClick = {handler}/>
    </div>
    <div className="group">
      <Button name="1" value="1" handleClick = {handler} />
      <Button name="2" value="2" handleClick = {handler} />
      <Button name="3" value="3" handleClick = {handler} />
      <Button name="+" value="+" color={color} handleClick = {handler} />
    </div>
    <div className="group">
      <Button name="0" value="0" wide={wide} handleClick = {handler}/>
      <Button name="." value="." handleClick = {handler}/>
      <Button name="=" value="=" color={color} handleClick = {handler} />
    </div>
  </div>
 );
}
}
  
export default ButtonPanel;