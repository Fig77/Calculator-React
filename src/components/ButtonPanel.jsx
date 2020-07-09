import React from 'react';
import Button from './Button'
const ButtonPannel = () => {
  console.log(<Button {...'AC'}/>)
  return (
    <div className=''>
      <div>
        <Button text='AC'/>
        <Button text='+'/>
        <Button text='-'/>
        <Button text='%'/>
      </div>
      <div>
        <Button text='7'/>
        <Button text='8'/>
        <Button text='9'/>
        <Button text='7'/>
      </div>
      <div>
        <Button text='4'/>
        <Button text='5'/>
        <Button text='6'/>
        <Button text='-'/>
      </div>
      <div>
        <Button text='1'/>
        <Button text='2'/>
        <Button text='3'/>
        <Button text='+'/>
      </div>
      <div>
        <Button text='0'/>
        <Button text='-'/>
        <Button text='='/>
      </div>
    </div>
  );
}

export default ButtonPannel