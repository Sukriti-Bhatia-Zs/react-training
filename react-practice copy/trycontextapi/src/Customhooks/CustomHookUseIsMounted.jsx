import React, { useState,useEffect } from "react";
import useIsMounted from "./useIsMounted";

const CustomHookUseIsMounted=()=>{

    const {ismount}=useIsMounted();

    const [message,setMessage]=useState("");

    useEffect(()=>{
        if(ismount){
            setTimeout(()=>{
                setMessage("Component Mounted")
            },4000)
        }
    })

    return (
        <div className="mainbody" style={{color:"black"}}>

            {
                message && (
                    <div>{message}</div>
                )
            }

        </div>
    )




}

export default CustomHookUseIsMounted
