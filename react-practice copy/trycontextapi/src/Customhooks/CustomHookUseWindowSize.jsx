import React from "react"
import useWindowSize from "./useWindowSize"



const CustomHookUseWindowSize=()=>{

    const {width, height}=useWindowSize();

    return (
        <div className="mainbody">
    
            <div className="content">
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

export default CustomHookUseWindowSize


