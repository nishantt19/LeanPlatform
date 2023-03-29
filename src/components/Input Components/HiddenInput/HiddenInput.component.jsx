import React , {useState} from "react";
import './HiddenInput.styles.css';

import 'font-awesome/css/font-awesome.min.css';


const HiddenInput =(props)=>{

    const [isTextHidden, setIsTextHidden] = useState(true);

    const toggleTextVisibility = () => {
        setIsTextHidden(!isTextHidden);
      };

    return (
        <div className="input-div">
  <input className="hidden-input" placeholder={props.placeholder} type={isTextHidden ? "password" : "text"}
    
    onChange={(e) => setInputValue(e.target.value)}
  />
  <span className="icon" onClick={toggleTextVisibility}>
    {isTextHidden ? <i className="fa fa-regular fa-eye "></i> : <i className="fa fa-regular fa-eye-slash "></i>}
  </span>
</div>
    )
}

export default HiddenInput;