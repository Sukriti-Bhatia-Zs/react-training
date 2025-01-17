import React, { useEffect,useState } from "react";

const useCompSize=(ref)=>{

    const [compsize,setCompSize]=useState({
        width:0,
        height:0
    })

    useEffect(()=>{

        const changesize=()=>{
            if(ref.current){
                setCompSize(prev=>({...prev,width:ref.current.offsetwidth,height:ref.current.offsetheight}))
            }
        }

        const resizeObserver = new ResizeObserver(changesize);

        if(ref.current){
            resizeObserver.observer(ref.current)
        }

    },[ref.current])

    return {compsize}
    
}

export default useCompSize