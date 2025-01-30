import './index.css';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [center, setCenter] = useState(false);
  const refa = useRef(null);

  const handleclickbtn = (index) => {
    if (index === 4) {
      console.log("4th index clicked");
      setCenter((prev) => !prev);
    }
  };

  useEffect(() => {
    console.log(center);
  }, [center]);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        refa.current &&
        !refa.current.contains(event.target) &&
        event.target.tagName !== 'BUTTON'
      ) {
       
          setCenter(false);
      
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <main>
      {tooltips.map((tooltip, i) => (
        <div className="card" key={i}>
          {i === 4 ? (
            <Button
              text={tooltip.text}
              alignment={tooltip.alignment}
              index={i}
              onClick={() => handleclickbtn(i)}
              ref={refa}
            />
          ) : i % 2 === 0 ? (
            <Button
              text={tooltip.text}
              alignment={tooltip.alignment}
            />
          ) : (
            <Hover text={tooltip.text} alignment={tooltip.alignment} />
          )}
        </div>
      ))}
      {center && <SideBar setCenter={setCenter}/>}
    </main>
  );
}

export default App;

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

const Button = ({ text, alignment, index, onClick, ref }) => {
  return (
    <Tooltip text={text} alignment={alignment}>
      <button onClick={onClick} ref={ref}>
        Click me
      </button>
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

const SideBar = ({setCenter}) => {

  const [removeanimation ,setRemoveanimation]=useState(false)

  const handleclick=()=>{
    setRemoveanimation(true)
    setTimeout(()=>{
      setCenter(false)
    },500)
  }
 
  return (
    <div className="Sidebar">
      <div onClick={(e) => e.stopPropagation()} className={`sidebar ${removeanimation ? 'slideOut':''}`}>
        <div className='cross' style={{color:"red",height:"5px",width:"5px",fontSize:"2rem",right:"1.5rem"}} onClick={handleclick}>x</div>
        <div>Hi, this is the sidebar</div>
      </div>
    </div>
  );
};

const tooltips = [
  {
    text: 'hi btn1',
    alignment: 'top',
  },
  {
    text: 'hi whatsup',
    alignment: 'top',
  },
  {
    text: 'hi btn2',
    alignment: 'top',
  },
  {
    text: 'hi hover',
    alignment: 'left',
  },
  {
    text: 'hi btn3',
    alignment: 'top',
  },
  {
    text: 'hi hover2',
    alignment: 'right',
  },
  {
    text: 'hi btn3',
    alignment: 'bottom',
  },
  {
    text: 'hi hover3',
    alignment: 'bottom',
  },
  {
    text: 'hi ',
    alignment: 'bottom',
  },
];
