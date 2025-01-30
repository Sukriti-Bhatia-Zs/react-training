import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import '../Buttons/Buttonscss.css'

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState();
  const [error, setError] = useState("");
  const [showbtn,setShowBtn]=useState(false);
  const [loading,setLoading]=useState(false)


  const [rechangebuttn,setRechangebtn]=useState();

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value <= 6) {
        setRechangebtn(value);
        setError("");
      } 
    setShowBtn(false);
    setRechangebtn(value);


  };

  const handleClick = () => {
    if (rechangebuttn<=1 || rechangebuttn > 6) {
      setError("Please enter a value between 2 and 6.");
    } else {
      setError(""); 
      setShowBtn(false); 
      setLoading(true); 
      
     
      setTimeout(() => {
        setInputValue(rechangebuttn); 
        setLoading(false); 
        setShowBtn(true);
      }, 2000); 
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
            className="inputfield"
            
          />
        </div>
        {error && <div className="error" style={{color:"red"}}>{error}</div>}
        <div>
          <button onClick={handleClick} className="roll-btn">Roll</button>
        </div>
      </div>

      
        {<ChildComponent inputValue={inputValue} error={error} showbtn={showbtn} loading={loading}/>}
     


    </div>
  );
};

export default ParentComponent;



