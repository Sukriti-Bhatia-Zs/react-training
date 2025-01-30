import { useState } from "react";
import './Accordian.css'

export default function Accordion(props) {
  const [state, setState] = useState(false);
 
  return (
    <div className="accordian-style">
      <div className="divcontent">
        <div onClick={() => setState((prev) => !prev)}>
          {props.heading}{" "}
          <span
            aria-hidden={true}
            className={state ? "rotated" : "accordion-icon"}
          />
        </div>
        {state && <div className="Content">{props.content}</div>}
      </div>
     
    </div>
  );
}
