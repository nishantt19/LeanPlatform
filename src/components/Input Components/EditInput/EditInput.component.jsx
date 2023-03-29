import React from "react";
import './EditInput.styles.css';

const EditInput = (props) => {

  return (
    <div className="container">
      <input className="edit-input" type="text" placeholder={props.placeholder} />
      <span className="edit" >
        Edit
      </span>
    </div>
  );
};

export default EditInput;
