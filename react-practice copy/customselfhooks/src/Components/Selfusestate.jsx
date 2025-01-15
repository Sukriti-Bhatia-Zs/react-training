import React, { useReducer } from "react";


const Selfusestate=(initialvalue)=>{

    // const [variable,dispatch]=useReducer((state,action)=>{
    //     switch(action.type){
    //         case "SET":
    //             return action.payload;
    //         case "UPDATE":
    //             return state+action.payload;
    //         default:
    //             return state;
    //     }
    // },initialvalue);

    // const setvariable=(newval)=>{
    //     if(typeof newval ==="function"){
    //         dispatch({type:"UPDATE",payload: newval(variable)})
    //     }
    //     else{
    //         dispatch({type:"SET",payload: newval})
    //     }
    // }

   
    // }

    // // On initial load, check if there's a value stored in localStorage
    // if (localStorage.getItem("count") !== null) {
    //     variable = parseInt(localStorage.getItem("count"), 10); // Restore from localStorage
    //   } else {
    //     localStorage.setItem("count", variable); // Save the initial value to localStorage
    //   }


    // return [variable,setvariable]

  //   let variable = initialvalue;

  
  // const setVariable = (newVal) => {
  //   if (typeof newVal === "function") {
  //     variable = newVal(variable); 
  //   } else {
  //     variable = newVal; 
  //   }

  //   localStorage.setItem("count", variable);

   
  //   setTimeout(() => {
  //     window.location.reload(); 
  //   }, 100);
  // };

  
  // if (localStorage.getItem("count") !== null) {
  //   const storedValue = localStorage.getItem("count");
   
  //       if (!isNaN(storedValue) ) {
  //           variable = parseFloat(storedValue);  //  numbers.
  //       } else {
  //           variable = storedValue;  // Keep it as a string if it's not a valid number.
  //       }
  // } else {
  //   localStorage.setItem("count", variable); // Save the initial value to localStorage
  // }


   

  return [variable, setVariable];

}

export default Selfusestate