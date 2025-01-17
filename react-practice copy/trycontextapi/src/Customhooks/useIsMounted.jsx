import React from "react";
import { useState ,useEffect} from "react";

const useIsMounted=()=>{

    const [ismount,setIsmount]=useState(false)

    useEffect(()=>{
        setIsmount(true);
    },[])

    console.log(ismount)

    return {ismount}

}

export default useIsMounted