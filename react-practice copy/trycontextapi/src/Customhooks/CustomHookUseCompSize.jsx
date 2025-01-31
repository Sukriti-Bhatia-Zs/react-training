import React from "react"
import useCompSize from "./useCompSize";
import { useRef } from "react";



const CustomHookUseCompSize=()=>{

    const ref=useRef(null)

    const {width,height}=useCompSize(ref);

    return (
        <div className="mainbody">
    
            <div className="content" ref={ref}>
                <div >
                   Window width {width} px
                </div>
                <div>
                    Window height {height} px
                </div>
            </div>
    
        </div>
    )

}

export default CustomHookUseCompSize

