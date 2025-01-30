import React from "react"
import useWindowSize from "./useWindowSize"



const CustomHookUseWindowSize=()=>{

    const {windowsize}=useWindowSize();

    return (
        <div className="mainbody">
    
            <div className="content">
                <div >
                   Window width {windowsize.width} px
                </div>
                <div>
                    Window height {windowsize.height} px
                </div>
            </div>
    
        </div>
    )

}

export default CustomHookUseWindowSize


