import React from "react";
import './LabelInput.styles.css';


const LabelInput=(props)=>{
    return (
        <div className="container">
        
        <input className="label-input" type={props.type}  placeholder={props.placeholder} />
        <label className="label" htmlFor="inputField">{props.label}</label>
      </div>
    )
}

export default LabelInput;