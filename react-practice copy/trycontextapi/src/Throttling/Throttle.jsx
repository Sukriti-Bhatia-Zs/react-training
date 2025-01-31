import React from "react";

const Throttle=()=>{
 

  const throttle = (func, delay) => {
   
    // let lastTime = 0;

    //  return ()=>{
    //     const now=Date.now();

    //     if(now-lastTime>=delay){
    //         func();
    //         lastTime=now;
    //         setTimeout(()=>{
    //             console.log(now);
    //         },delay)
    //     }
    //  }

    let flag=true;

    return ()=>{
        if(flag){
            flag=false;
            setTimeout(()=>{
                func();
                flag=true;
            },2000)
        }
    }
    
    };
  

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"blue",width:"100vw"}}>
            <div>
                <button style={{backgroundColor:"beige",color:"black",padding:"1rem"}} onClick={throttle(()=>{
                   console.log(Date.now())
                },3000)}>Click me</button>
            </div>
        </div>
    )
}

export default Throttle