import  { useState,useEffect } from "react";

const useWindowSize=()=>{

    const [windowsize,setWindowSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    })

   

    useEffect(()=>{
        const onrezise=()=>{
            window.addEventListener("resize",()=>{
                setWindowSize(prev=>({...prev,width:window.innerWidth,height:window.innerHeight}))
            })
        }

        window.addEventListener('resize',onrezise)

        return ()=>{
            window.removeEventListener('resize',onrezise)
        }
       
    },[])

    return windowsize



}

export default useWindowSize