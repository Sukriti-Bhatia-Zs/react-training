import React from "react"
import useCompSize from "./useCompSize";
import { useState ,useRef} from "react";



const CustomHookUseCompSize=()=>{
    const ref=useRef();

    const {height,width}=useCompSize(ref);

    

    return (
        <div className="mainbody" ref={ref}>
    
            <div className="content">
                <div >
                   Component width {width} px
                </div>
                <div>
                    Component height {height} px
                </div>
            </div>
    
        </div>
    )

}

export default CustomHookUseCompSize

