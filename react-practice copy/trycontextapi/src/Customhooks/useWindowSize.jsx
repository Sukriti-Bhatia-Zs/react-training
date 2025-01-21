import React, { useState,useEffect } from "react";

const useWindowSize=()=>{

    const [windowsize,setWindowSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    })

    

    useEffect(()=>{

        const onResize = () => {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
        };
      
          window.addEventListener("resize", onResize);
      
       
          return () => {
            window.removeEventListener("resize", onResize);
          };

       
    },[])

    

    return windowsize



}

export default useWindowSize