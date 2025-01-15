import React, { useEffect } from "react";
import Selfusestate from "./Selfusestate";

const UseSelfusestate=()=>{

    const [count,setcount]=Selfusestate(0);

    console.log(count);

    const increment=()=>{
        setcount(prev=>prev+1);
    }

    console.log(count);
    
    return (

        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment </button>
            
        </div>
    )

  
}

export default UseSelfusestate