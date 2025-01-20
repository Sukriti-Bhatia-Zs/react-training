import React from "react"
import useCompSize from "./useCompSize";
import { useState ,useRef} from "react";



const CustomHookUseCompSize=()=>{
    const ref=useRef();

    const {compsize}=useCompSize(ref);

    

    return (
        <div className="mainbody" ref={ref}>
    
            <div className="content">
                <div >
                   Window width {compsize.width} px
                </div>
                <div>
                    Window height {compsize.height} px
                </div>
            </div>
    
        </div>
    )

}

export default CustomHookUseCompSize

