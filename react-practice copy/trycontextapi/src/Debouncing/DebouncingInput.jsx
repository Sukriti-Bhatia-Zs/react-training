import React, { useEffect, useState } from "react";

const DebouncingInput = () => {
  
  const handleinputchange=(event)=>{
    console.log(event.target.value);
  }

  const debounce=(func,delay)=>{
    // function timer
    let timer;

    return (...args)=>{
      // clear timer functions when calling everytime
      clearTimeout(timer);
      timer=setTimeout(()=>{
        // function get executed after delay
        func(...args)
      },delay)
    }
  }
  // handle debouce input , preventing mutiple api calls as handleinputchange will only be executed after 3000 sec
  const handledebounceInput=debounce(handleinputchange,3000);






  return (
    <div className="main">
      <div className="center">
        <label htmlFor="search">Search :</label>
        <input
          type="text"
          name="search"
          style={{ width: "100%" }}
          onChange={handledebounceInput}
        />
      
      </div>
    </div>
  );
};

export default DebouncingInput;