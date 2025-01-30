import React from "react";
import { useState, useEffect, useRef } from 'react';
import Button from "./Button";
import Hover from "./Hover";
import Sidebar from "./Sidebar";
import './Tooltip.css'

const TooltipMain=()=>{

    const tooltips = [
        {
          text: 'hi btn1',
          alignment: 'top',
        },
        {
          text: 'hi whatsup',
          alignment: 'top',
        },
        {
          text: 'hi btn2',
          alignment: 'top',
        },
        {
          text: 'hi hover',
          alignment: 'left',
        },
        {
          text: 'hi btn3',
          alignment: 'top',
        },
        {
          text: 'hi hover2',
          alignment: 'right',
        },
        {
          text: 'hi btn3',
          alignment: 'bottom',
        },
        {
          text: 'hi hover3',
          alignment: 'bottom',
        },
        {
          text: 'hi ',
          alignment: 'bottom',
        },
      ];
      

     const [center, setCenter] = useState(false);
      const refa = useRef(null);
    
      const handleclickbtn = (index) => {
        if (index === 4) {
          console.log("4th index clicked");
          setCenter((prev) => !prev);
        }
      };
    
      useEffect(() => {
        console.log(center);
      }, [center]);
    
    
      useEffect(() => {
        const handleOutsideClick = (event) => {
          if (
            refa.current &&
            !refa.current.contains(event.target) &&
            event.target.tagName !== 'BUTTON'
          ) {
           
              setCenter(false);
          
          }
        };
    
        window.addEventListener('click', handleOutsideClick);
    
        return () => {
          window.removeEventListener('click', handleOutsideClick);
        };
      }, []);
    
      return (
        <main>
          {tooltips.map((tooltip, i) => (
            <div className="card" key={i}>
              {i === 4 ? (
                <Button
                  text={tooltip.text}
                  alignment={tooltip.alignment}
                  index={i}
                  onClick={() => handleclickbtn(i)}
                  ref={refa}
                />
              ) : i % 2 === 0 ? (
                <Button
                  text={tooltip.text}
                  alignment={tooltip.alignment}
                />
              ) : (
                <Hover text={tooltip.text} alignment={tooltip.alignment} />
              )}
            </div>
          ))}
          {center && <Sidebar setCenter={setCenter}/>}
        </main>

      )

}

export default TooltipMain