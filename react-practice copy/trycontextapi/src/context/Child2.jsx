import React from "react";
import { Themes } from "./ParentContext";
import { useContext } from "react";

const Child2=()=>{

    const {currenttheme,choosetheme}=useContext(Themes);

    return (
        <div style={{
            height: "300px", width: "300px", display: "flex", justifyContent: "space-around",
            alignItems: "center", backgroundColor: currenttheme.backgroundcolor,
            color: currenttheme.color, flexDirection: "column",border:"2px solid red"
        }}>
            <div>
                <button onClick={()=>choosetheme()}>SWITCH CHILD 2</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Child2