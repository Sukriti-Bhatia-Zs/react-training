import React from "react";
import { useState } from "react";
import './Tooltip.css'

const Sidebar = ({setCenter}) => {

  const [removeanimation ,setRemoveanimation]=useState(false)

  const handleclick=()=>{
    setRemoveanimation(true)
    setTimeout(()=>{
      setCenter(false)
    },500)
  }
 
  return (
    <div className="Sidebar">
      <div onClick={(e) => e.stopPropagation()} className={`sidebar ${removeanimation ? 'slideOut':''}`}>
        <div className='cross' style={{color:"red",fontSize:"2rem",right:"1.5rem",position:"absolute",top:"0",right:"9px",cursor:"pointer"}} onClick={handleclick}>x</div>
        <div>Hi, this is the sidebar</div>
      </div>
    </div>
  );
};


export default Sidebar