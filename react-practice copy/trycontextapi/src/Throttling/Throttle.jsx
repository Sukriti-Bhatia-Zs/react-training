import React from "react";

const Throttle=()=>{
 

  const throttle = (func, delay) => {
   
    let lastTime = 0;

     return ()=>{
        const now=Date.now();

        if(now-lastTime>=delay){
            func();
            lastTime=now;
            setTimeout(()=>{
                console.log(now);
            },delay)
        }
     }
    
    };
  

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"blue"}}>
            <div>
                <button style={{backgroundColor:"beige",color:"black",padding:"1rem"}} onClick={throttle(()=>{
                   
                },3000)}>Click me</button>
            </div>
        </div>
    )
}

export default Throttle