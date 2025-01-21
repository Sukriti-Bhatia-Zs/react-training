import './index.css'
import './App.css';
import Themecontextprovider from './Components/Themecontextprovider';
import Buttons4 from './Buttons/Buttons4';
import CustomHookUseIsMounted from './Customhooks/CustomHookUseIsMounted';
import CustomHookUseWindowSize from './Customhooks/CustomHookUseWindowSize';
import CustomHookUseCompSize from './Customhooks/CustomHookUseCompSize'
import FormValidation from './Form/FormValidation';
import ParentComponent from './Reacttest2/ParentComponent';


function App() {
  return (
    <div>
      {/* <Themecontextprovider/> */}
      {/* <Buttons4/> */}
      {/* <CustomHookUseIsMounted/> */}
      {/* <CustomHookUseWindowSize/> */}
      {/* <CustomHookUseCompSize/> */}
      {/* <FormValidation/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
