import React from "react";
import Tooltip from "./Tooltip";

const Button = ({ text, alignment, index, onClick, ref }) => {
    return (
      <Tooltip text={text} alignment={alignment}>
        <button onClick={onClick} ref={ref}>
          Click me
        </button>
      </Tooltip>
    );
};

export default Button