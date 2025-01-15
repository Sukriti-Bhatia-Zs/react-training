import React, { useRef } from "react";
import { useState } from "react";

const Customusestate= (variable)=>{

    // const [state,setstate]=useState(variable);
    // let val=variable;

    const val=useRef(variable);

    const rerender=useRef(0);


    function functionstate(newval){
        // setstate(newval);
        val.current=newval;
       
        rerender.current+=1;
    }
     
    return [val.current,functionstate];


}


export default Customusestate;