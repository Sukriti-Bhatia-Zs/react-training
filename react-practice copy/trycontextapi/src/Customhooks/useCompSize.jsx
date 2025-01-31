import { useEffect,useState } from "react";

const useCompSize=(ref)=>{

    const [compsize,setCompSize]=useState({
        width:0,
        height:0
    })

    useEffect(()=>{

        const changesize=()=>{
            if(ref.current){
                setCompSize({width:ref.current.offsetWidth,height:ref.current.offsetHeight})
            }
        }

       
        const resizeobserver = new ResizeObserver(changesize);

        if(ref.current){
            resizeobserver.observe(ref.current)
        }


        return () => {
            resizeobserver.disconnect();
        };

    },[ref])

    return compsize
    
}

export default useCompSize