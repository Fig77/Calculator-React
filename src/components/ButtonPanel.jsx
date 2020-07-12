import React from 'react';
import Button from './Button';

const wide = true;
let color = '#ff5722';
const ButtonPanel = () => ( 
  <div className="calculator">
    <div className="group">
      <Button value="AC" color={color} />
      <Button value="+/-" color={color} />
      <Button value="÷" color={color} />
      <Button value="%" color={color} />
    </div>
    <div className="group">
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="X" color={color} />
    </div>
    <div className="group">
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="-" color={color}/>
    </div>
    <div className="group">
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="+" color={color} />
    </div>
    <div className="group">
      <Button value="0" wide={wide}/>
      <Button value="." />
      <Button value="=" color={color} />
    </div>
  </div>
);
  
export default ButtonPanel;