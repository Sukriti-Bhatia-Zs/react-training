import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState();
  const [error, setError] = useState("");


  const [rechangebuttn,setRechangebtn]=useState();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setRechangebtn(false);

    if (value <= 6) {
        setRechangebtn(value);
        setError("");
      } 

      setRechangebtn(value);


  };

  const handleClick = () => {
    if (rechangebuttn > 6) {
      setError("Please enter a value between 1 and 6.");
    } else {
        setInputValue(rechangebuttn)
    
    }

   
  };

  return (
    <div className="Main">
      <div className="ParentContent">
        <div>
          {/* <label htmlFor="Buttons">Buttons: </label> */}
          <input
            type="text"
            name="Buttons"
            placeholder="Enter No of Buttons "
            onChange={handleInputChange}
            width={"100%"}
            className="input-field"
            
          />
        </div>
        {error && <div className="error" style={{color:"red"}}>{error}</div>}
        <div>
          <button onClick={handleClick} className="roll-btn">Roll</button>
        </div>
      </div>

      
        {<ChildComponent inputValue={inputValue} error={error} />}
     


    </div>
  );
};

export default ParentComponent;



