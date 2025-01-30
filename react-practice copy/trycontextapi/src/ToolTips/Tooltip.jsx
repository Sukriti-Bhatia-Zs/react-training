import React from "react";
import { useState, useEffect, useRef } from 'react';
import './Tooltip.css'

const Tooltip = ({ alignment, text, children }) => {
  const [show, setShow] = useState(false);
  const mainRef = useRef(null);

  const getAlignmentClass = (alignment) => {
    switch (alignment) {
      case 'top':
        return 'top';
      case 'bottom':
        return 'bottom';
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      default:
        return 'top';
    }
  };

  const isButton = children.type === 'button';
  const isSpan = children.type === 'span';

  useEffect(() => {
    const handleoutsidebtn = (event) => {
      if (
        mainRef.current &&
        !mainRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    window.addEventListener("click", handleoutsidebtn);

    return () => {
      window.removeEventListener("click", handleoutsidebtn);
    };
  }, []);

  return (
    <div
      className="maindiv"
      onMouseEnter={isSpan ? () => setShow(true) : undefined}
      onMouseLeave={isSpan ? () => setShow(false) : undefined}
      onClick={isButton ? () => setShow(true) : undefined}
      ref={mainRef}
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