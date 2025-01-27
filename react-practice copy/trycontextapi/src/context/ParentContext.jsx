import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import { createContext } from "react";
import { useState } from "react";
import './Parentcontext.css'

const theme=[
    {name:"dark",backgroundcolor:"#000",color:"#fff"},
    {name:"light",backgroundcolor:"beige",color:"black"}
]

const Themes=createContext(theme);

const ParentContext=()=>{


    const [themeindex,setThemeIndex]=useState(0);

    const choosetheme=()=>{
        setThemeIndex(prev=>(prev+1)%theme.length);
    }

    const currenttheme = theme[themeindex];


    return (
        <div className="parent" style={{
            height: "100vh", width: "100vw", display: "flex", justifyContent: "space-around",
            alignItems: "center", backgroundColor: currenttheme.backgroundcolor,
            color: currenttheme.color, flexDirection: "column"
        }}>
            <div>
                <button onClick={()=>choosetheme()}>SWITCH PARENT</button>
            </div>
            <div className="childs">
                <Themes.Provider value={{ currenttheme, choosetheme }}>
                    <Child1/>
                    <Child2/>
                    <Child3/>
                    <Child4/>
                </Themes.Provider>
            </div>
        </div>
    )
}

export default ParentContext
export {Themes}