import React from "react"
import useCompSize from "./useCompSize";
import { useState } from "react";



const CustomHookUseCompSize=()=>{

    const {compsize}=useCompSize();

    return (
        <div className="mainbody">
    
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

