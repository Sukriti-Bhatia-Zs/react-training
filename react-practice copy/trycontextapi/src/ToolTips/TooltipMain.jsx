import React from "react";
import Button from "./Button";
import Hover from "./Hover";
import './Tooltip.css'

const TooltipMain=()=>{

    const tooltips = [
        {
          text: "hi btn1",
          alignment: "top",
        },
        {
          text: "hi whatsup",
          alignment: "top",
        },
        {
          text: "hi btn2",
          alignment: "top",
        },
        {
          text: "hi hover",
          alignment: "left",
        },
        {
          text: "hi btn3",
          alignment: "top",
        },
        {
          text: "hi hover2",
          alignment: "right",
        },
        {
          text: "hi btn3",
          alignment: "bottom",
        },
        {
          text: "hi hover3",
          alignment: "bottom",
        },
        {
          text: "hi ",
          alignment: "bottom",
        },
      ];
            
    return (
        <main>
        {tooltips.map((tooltip, i) => (
          <div className="card" key={i}>
            {i % 2 === 0 ? (
              <Button text={tooltip.text} alignment={tooltip.alignment} />
            ) : (
              <Hover text={tooltip.text} alignment={tooltip.alignment} />
            )}
          </div>
        ))}
      </main>
    )
}

export default TooltipMain