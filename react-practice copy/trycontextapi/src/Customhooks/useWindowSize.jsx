import React, { useState,useEffect } from "react";

const useWindowSize=()=>{

    const [windowsize,setWindowSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    })

    const onrezise=()=>{
        window.addEventListener("resize",()=>{
            setWindowSize(prev=>({...prev,width:window.innerWidth,height:window.innerHeight}))
        })
    }

    useEffect(()=>{
        onrezise();
    })

    return {windowsize}



}

export default useWindowSize