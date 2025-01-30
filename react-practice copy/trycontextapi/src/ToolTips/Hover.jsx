import React from "react";
import Tooltip from "./Tooltip";

const Hover = ({ text, alignment }) => {
    return (
      <Tooltip text={text} alignment={alignment}>
        <span>Hover over me</span>
      </Tooltip>
    );
};

export default Hover