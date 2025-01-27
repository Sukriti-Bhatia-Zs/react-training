import React, { useEffect, useState } from "react";
import './Dropdown.css'
import Dropdowncontent from "./Dropdowncontent";

const data=[
    {
        title:"Select Fruits",
        options:["apple","banana","pineapple"]
    },
    {
        title:"Select Vegetables",
        options:["brocolli","beans","potato"]
    },
    {
        title:"Select Medicines",
        options:["aspirin","disprin","crocin"]
    },
    
]

const Dropdown=()=>{

    const [showdropdown,setShowDropDown]=useState(false);

    useEffect(()=>{
        console.log(showdropdown)
    },[showdropdown])


    return (
        <div className="accordian-style">
            <div className="divinside"> 
                <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",gap:"1rem"}}onClick={()=>setShowDropDown(prev=>!prev)}>
                    <div>
                        Dropdown{" "} 
                    </div>

                    <span
                    aria-hidden={true}
                    className={showdropdown ? "rotated" : "accordion-icon"}
                    /> 
                </div>
                {showdropdown && <Dropdowncontent data={data} />}
            </div>
        </div>
    )
}

export default Dropdown