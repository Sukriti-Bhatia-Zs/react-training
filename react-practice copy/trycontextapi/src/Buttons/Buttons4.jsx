import React, { useEffect,useState} from "react";
import './Buttonscss.css'

const Buttons4=()=>{

    const [buttons,setbuttons]=useState([])

    const [count,setcount]=useState(0);

    const addbuttons=()=>{
        const newarr=[];
        for(let i=0;i<9;i++){
            newarr.push({id:i,text:`Btn${i}`});
        }
        setbuttons(newarr);
    }

    const handleclick=(e)=>{
        console.log(e.target)
        const button=e.target;
        if(count<4){
            if(button.dataset.isclicked==="false"){
                button.dataset.isclicked="true";
                button.style.backgroundColor="beige";
                button.style.color="black";
                setcount((prev)=>prev+1);
            }
        }
    }

    useEffect(()=>{
        addbuttons()
    },[])


    return (
        <div className="main">
            <div className="diving">
                {
                    buttons.map((btnobj)=>{
                        return (
                            <button key={btnobj.id} className="buttonInsideGrid" onClick={handleclick} data-isclicked="false">
                                {btnobj.text} 
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )


}

export default Buttons4