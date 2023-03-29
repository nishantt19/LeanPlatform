import React, {useState} from "react";
import "./HiddenLabelInput.styles.css";

const HiddenLabelInput = (props) => {
  const [isTextHidden, setIsTextHidden] = useState(true);

  const toggleTextVisibility = () => {
    setIsTextHidden(!isTextHidden);
  };

  return (
    <div className="container">
      <input
        className="hidden-label-input"
        type={isTextHidden ? "password" : "text"}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={props.placeholder}
      />
      <label className="hidden-label" htmlFor="inputField">
        {props.label}
      </label>
      <span className="icon" onClick={toggleTextVisibility}>
        {isTextHidden ? (
          <i className="fa fa-regular fa-eye "></i>
        ) : (
          <i className="fa fa-regular fa-eye-slash "></i>
        )}
      </span>
    </div>
  );
};

export default HiddenLabelInput;
