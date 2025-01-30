import React from "react";
import Tooltip from "./Tooltip";

const Button = ({ text, alignment }) => {
    return (
      <Tooltip text={text} alignment={alignment}>
        <button>Click me</button>
      </Tooltip>
    );
};

export default Button