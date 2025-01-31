import './index.css';
import './App.css';
import { useState } from 'react';
import TooltipMain from './ToolTips/TooltipMain';
import Themecontextprovider from './Components/Themecontextprovider';
import Buttons4 from './Buttons/Buttons4';
import CustomHookUseIsMounted from './Customhooks/CustomHookUseIsMounted';
import CustomHookUseWindowSize from './Customhooks/CustomHookUseWindowSize';
import CustomHookUseCompSize from './Customhooks/CustomHookUseCompSize'
import FormValidation from './Form/FormValidation';
import ParentContext from './context/ParentContext';
import Throttle from './Throttling/Throttle';
import DebouncingInput from './Debouncing/DebouncingInput';
import Modal1 from './Modal/Modal1';
import AccordionMain from './ReactTestDay12/AccordianMain';
import ParentComponent from './Reacttest2/ParentComponent';
import Parentprops from './reacttest/Parentprops';
import Dice from './Dice/Dice';


function App() {

  const [component,setComponent]=useState(null)


  const btn=['Buttons','ThemeContextReducer Assignment','Themecontext 5 children Assignment',
    'Debouncing','Dice','Form Validation','Modal','Sum of Dice Assignment','Parent child props Assignment',
  'Accordian','Throttling','Tooltip Assignment','IsMounted CustomHook','ComponentSize CustomHook','WindowSize CustomHook']

  const componentsList = [
    <Buttons4 />,
    <Themecontextprovider />,
    <ParentContext/>,
    <DebouncingInput />,
    <Dice />,
    <FormValidation />,
    <Modal1 />,
    <ParentComponent/>,
    <Parentprops/>,
    <AccordionMain />,
    <Throttle />,
    <TooltipMain />,
    <CustomHookUseIsMounted />,
    <CustomHookUseCompSize />,
    <CustomHookUseWindowSize />,
  ];
  
  return (
    <div>
      {
        component === null ? (
          <div className='mainbuttons'>
            <div className='btnsmain'>
              {btn.map((name, index) => (
                <button key={index} onClick={() => setComponent(index)}>
                  {name}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className='component-fullscreen'>
            <button className='back-button' onClick={() => setComponent(null)}>⬅ Back</button>
            {componentsList[component]}
          </div>
        )
      }
    </div>
  
  );
}

export default App;

