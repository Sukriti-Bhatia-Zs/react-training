import React, { useEffect, useState } from "react";
import Number from "./Number";

const Count=()=>{

    const [count,setCount]=useState(0);

    const [num,setNum]=useState(0);

    const [name,setName]=useState("");

    const props1={count,num,name};

    useEffect(()=>{
        console.log("component mounted")
    },[])


    useEffect(()=>{
        console.log(count);
        setNum(prev=>prev+1);
    },[count])


    return (
        <div>
            <div>hi trial usEffect</div>
            <button onClick={()=>setCount(prev=>prev+1)}>Click me</button>
            <Number props1={props1}/>
        </div>

    )





}

export default Count