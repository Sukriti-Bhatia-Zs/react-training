import React, { useEffect,useState} from "react";
import './Buttonscss.css'

const Buttons4=()=>{

    const [buttons,setbuttons]=useState([])

    const [states,setStates]=useState(Array(9).fill("false"))

    const [restate,setRestate]=useState([]);

    const [count,setcount]=useState(0);

    // const addbuttons=()=>{
    //     const newarr=[];
    //     for(let i=0;i<9;i++){
    //         newarr.push({id:i,text:`Btn${i}`});
    //     }
    //     setbuttons(newarr);
    // }

    const handleclick=(index)=>{
        // console.log(e.target)
        // const button=e.target;
        // if(count<4){
        //     if(button.dataset.isclicked==="false"){
        //         button.dataset.isclicked="true";
        //         button.style.backgroundColor="beige";
        //         button.style.color="black";
        //         setcount((prev)=>prev+1);
        //     }
        // }

        // production method
        if(count<4 && states[index]==="false"){
            setStates((prevstates)=>{
                const newstate=[...prevstates];
                console.log(newstate);
                if(newstate[index]==="false"){
                    newstate[index]="true";
   
                }

                return newstate;
            })

            setcount((prevCount) => prevCount + 1);

            // adding in restate array so that after count is 4  all buttons are again made black
            setRestate(prevrestate=>{
                // already true so add
                if (!prevrestate.includes(index)) {
                    return [...prevrestate, index];
                  }

                console.log("restate"+restate)

                return prevrestate;
            })
        }
    }

    const rehandle= ()=>{
        
           for(let i=restate.length;i>=0;i--){
                 const index=restate[i];

                 // setting state value to false of that index
                setTimeout(()=>{
                    setStates((prevstates)=>{
                    const newstate=[...prevstates]
                    // updating value
                    newstate[index]="false"
                    return newstate
                    })
                },(restate.length - 1 - i) * 500)

                
           }

               
                setcount(0);
                setRestate([]);

                

    }

    useEffect(()=>{
        console.log(states)
    },[states])

    useEffect(()=>{
        if(count===4){
            setTimeout(rehandle,5000)
        }
    },[count])

 
    return (
        <div className="main">
            <div className="diving">
                {
                    states.map((state,index)=>{
                        return (
                            <button key={index} className="buttonInsideGrid" onClick={()=>handleclick(index)} 
                                style={{
                                    backgroundColor: state==="true"? "lightblue":"black",
                                    color: state === "true" ? "black" : "white"
                                }}
                            >
                               {`btn${index}`}
                            </button>
                        )
                    })
                    // buttons.map((btnobj)=>{
                    //     return (
                    //         <button key={btnobj.id} className="buttonInsideGrid" onClick={handleclick} data-isclicked="false">
                    //             {btnobj.text} 
                    //         </button>
                    //     )
                    // })
                }
            </div>
        </div>
    )


}

export default Buttons4