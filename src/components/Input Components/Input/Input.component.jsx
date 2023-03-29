import React from 'react';
import './Input.styles.css';

const Input = (props) => {
  return (
    <div>
        <input className='input' type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}

export default Input