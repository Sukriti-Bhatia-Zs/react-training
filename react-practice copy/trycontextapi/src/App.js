import './index.css';
import './App.css';
import { useState, useEffect, useRef } from 'react';
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
import Accordion from './ReactTestDay12/Accordian';
import AccordionMain from './ReactTestDay12/AccordianMain';
import ParentComponent from './Reacttest2/ParentComponent';
import Count from './UseffectQues/Count';
import UseEffectques from './UseffectQues/UseEffectques';
import Childprops from './reacttest/Childprops';


function App() {
  
  return (
    <div>
      {/*<TooltipMain/>*}
      {/*<AccordionMain/>*/}
      {/* <Themecontextprovider/> */}
      {/* <Buttons4/> */}
      {/* <CustomHookUseIsMounted/> */}
      {/* <CustomHookUseWindowSize/> */}
      {/* <CustomHookUseCompSize/> */}
      {/* <FormValidation/> */}
      <ParentContext/>
      {/*<Throttle/>*/}
      {/*<DebouncingInput/>*/}
      {/*<Modal1/>*}
      {/* <Count/> */}
      {/* <UseEffectques/> */}
      {/* <Childprops/> */}
      {/*<Parentprops/>*/}
    </div>
  );
}

export default App;

