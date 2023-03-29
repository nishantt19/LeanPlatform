import React, { useState } from "react";
import "./form.styles.css";
import LabelInput from "../Input Components/LabelInput/LabelInput.component";
import Input from "../Input Components/Input/Input.component";
import HiddenInput from "../Input Components/HiddenInput/HiddenInput.component";
import HiddenLabelInput from "../Input Components/HiddenLabelInput/HiddenLabelInput.component";
import EditInput from "../Input Components/EditInput/EditInput.component";

const Form = (props) => {

   
  return (
    <div className="wrapper">
      <h1 className="heading">Basic Details</h1>
      <div className="form-wrapper">
      <form>
        <div className="top-div">
          <div className="grid-item">
            <Input placeholder={props.input1} type="text"/>
            
          </div>
          <div className="grid-item">
            <Input placeholder={props.input2} type="text" />
            <div className="assistive-text"> Assistive text </div>
          </div>
          <div className="grid-item">
            <LabelInput placeholder={props.labelInput1} type="text" label ={props.label1} />
          </div>
          <div className="grid-item">
            <LabelInput placeholder={props.labelInput2} type="text" label ={props.label2}/>
            <div className="assistive-text"> Assistive text </div>
          </div>

          <div className="grid-item">
            <LabelInput  placeholder={props.labelInput3}  type="text" label={props.label3} />
          </div>
          <div className="grid-item">
            <LabelInput  placeholder={props.labelInput4}  type="text" label={props.label4} />
            <div className="assistive-text"> Assistive text </div>
          </div>
        </div>

        <div className="middle-div">
        <div className="grid-item">
            <HiddenInput placeholder={props.hiddenInput1} />
            
          </div>
          <div className="grid-item">
          <HiddenInput placeholder={props.hiddenInput2} />
            <div className="assistive-text"> Assistive text </div>
          </div>
          <div className="grid-item">
            <HiddenLabelInput placeholder={props.hiddenInput3} type="text" label ={props.hiddenLabel} />
          </div>
          <div className="grid-item">
            <HiddenLabelInput placeholder={props.hiddenInput4} type="text" label ={props.hiddenLabel}/>
            <div className="assistive-text"> Assistive text </div>
          </div>

          <div className="grid-item">
            <HiddenLabelInput  placeholder={props.hiddenInput5} type="text" label={props.hiddenLabel} />
          </div>
          <div className="grid-item">
            <HiddenLabelInput  placeholder={props.hiddenInput6}  type="text" label={props.hiddenLabel} />
            <div className="assistive-text"> Assistive text </div>
          </div>
        </div>
        <div className="bottom-div">
        <div className="grid-item">
            <EditInput placeholder={props.editInput1}/>
          </div>
          <div className="grid-item">
            <EditInput placeholder={props.editInput2} />
            <div className="assistive-text"> Assistive text </div>
          </div>
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default Form;
