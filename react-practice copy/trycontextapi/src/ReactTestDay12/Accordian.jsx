import { useState } from "react";

export default function Accordion(props) {
  const [state, setState] = useState(false);
  // const [htmlstate, setHtmlState] = useState(false);
  // const [cssstate, setCssState] = useState(false);
  // const [jsstate, setJsState] = useState(false);
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
      {/* <div>
        <div onClick={() => setHtmlState((prev) => !prev)}>
          HTML{" "}
          <span
            aria-hidden={true}
            className={htmlstate ? "rotated" : "accordion-icon"}
          />
        </div>
        {htmlstate && (
          <div>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </div>
        )}
      </div>
      <div>
        <div onClick={() => setCssState((prev) => !prev)}>
          CSS{" "}
          <span
            aria-hidden={true}
            className={cssstate ? "rotated" : "accordion-icon"}
          />
        </div>
        {cssstate && (
          <div>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </div>
        )}
      </div>
      <div>
        <div onClick={() => setJsState((prev) => !prev)}>
          JavaScript{" "}
          <span
            aria-hidden={true}
            className={jsstate ? "rotated" : "accordion-icon"}
          />
        </div>
        {jsstate && (
          <div>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </div>
        )}
      </div> */}
    </div>
  );
}
