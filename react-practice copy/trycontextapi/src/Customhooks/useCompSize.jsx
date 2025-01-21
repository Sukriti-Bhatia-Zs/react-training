import React, { useEffect,useState } from "react";

const useCompSize=(ref)=>{

    const [compsize,setCompSize]=useState({
        width:0,
        height:0,
    })

    useEffect(()=>{

        const changesize=()=>{
            if(ref.current){
                setCompSize({width:ref.current.offsetWidth,height:ref.current.offsetHeight})
            }
        }

        const resizeObserver = new ResizeObserver(changesize);

        if(ref.current){
            resizeObserver.observe(ref.current)
        }

        return () => {
            if (ref.current) {
              resizeObserver.unobserve(ref.current);
            }
          };

    })

    return compsize
    
}

export default useCompSize