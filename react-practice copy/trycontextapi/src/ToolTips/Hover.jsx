import React from "react";
import Tooltip from "./Tooltip";

const Hover = ({ text, alignment }) => {
  let x = 4;
  console.log(x);
  
    return (
      <Tooltip text={text} alignment={alignment}>
        <span>Hover over me</span>
      </Tooltip>
    );
};

export default Hover