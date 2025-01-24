import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
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
  );
}

export default App;

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

const Button = ({ text, alignment }) => {
  return (
    <Tooltip text={text} alignment={alignment}>
      <button>Click me</button>
    </Tooltip>
  );
};

const Hover = ({ text, alignment }) => {
  return (
    <Tooltip text={text} alignment={alignment}>
      <span>Hover over me</span>
    </Tooltip>
  );
};

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

