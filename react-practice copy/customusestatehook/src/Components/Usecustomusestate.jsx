import React, { useEffect } from "react";
import Customusestate from "./Customusestate"

const Usecustomusestate = ()=>{

    const [count,setcount]=Customusestate(0);

    
    function increasecount(){
        setcount(count+1);
    }
    
    console.log(count);

    return (
        <div>
            <button onClick={increasecount}>Count</button>
        </div>
    )

}

export default Usecustomusestate;