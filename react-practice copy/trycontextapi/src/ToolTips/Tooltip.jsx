import React from "react";
import { useState, useEffect, useRef } from "react";

const Tooltip = ({ alignment, text, children }) => {
  const [show, setShow] = useState(false);
  const mainref = useRef(null);

  const getAlignmentClass = (alignment) => {
    switch (alignment) {
      case "top":
        return "top";
      case "bottom":
        return "bottom";
      case "left":
        return "left";
      case "right":
        return "right";
      default:
        return "top";
    }
  };

  useEffect(() => {
    const handleoutside = (event) => {
      if (
        mainref.current &&
        !mainref.current.contains(event.target) &&
        event.target.tagName != "BUTTON"
      ) {
        setShow(false);
      }
    };

    window.addEventListener("click", handleoutside);

    return () => {
      window.removeEventListener("click", handleoutside);
    };
  });

  const isButton = children.type == "button";
  const isSpan = children.type == "span";

  return (
    <div
      className="maindiv"
      onMouseEnter={isSpan ? () => setShow(true) : undefined}
      onMouseLeave={isSpan ? () => setShow(false) : undefined}
      onClick={isButton ? () => setShow(true) : undefined}
      ref={mainref}
    >
      {show && (
        <div className={`showtool ${getAlignmentClass(alignment)}`}>
          <p>{text}</p>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip