import React, { useEffect, useState } from "react";

const DebouncingInput = () => {
  



 
  const debounce = (func, delaytobedone) => {
    let timeout;

    return (...inputs) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...inputs)
      }, delaytobedone);
    };
  };

 
  const debouncedHandleInputChange = debounce((event) => {
    console.log(event.target.value)
    
  }, 500); 



  return (
    <div className="main">
      <div className="center">
        <label htmlFor="search">Search :</label>
        <input
          type="text"
          name="search"
          style={{ width: "100%" }}
          onChange={debouncedHandleInputChange}
        />
      </div>
    </div>
  );
};

export default DebouncingInput;