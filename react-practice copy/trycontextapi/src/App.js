import './index.css'
import './App.css';
import Themecontextprovider from './Components/Themecontextprovider';
import Buttons4 from './Buttons/Buttons4';
import CustomHookUseIsMounted from './Customhooks/CustomHookUseIsMounted';
import CustomHookUseWindowSize from './Customhooks/CustomHookUseWindowSize';
import CustomHookUseCompSize from './Customhooks/CustomHookUseCompSize'
import FormValidation from './Form/FormValidation';


function App() {
  return (
    <div>
      {/* <Themecontextprovider/> */}
      {/* <Buttons4/> */}
      {/* <CustomHookUseIsMounted/> */}
      {/* <CustomHookUseWindowSize/> */}
      {/* <CustomHookUseCompSize/> */}
      <FormValidation/>
    </div>
  );
}

export default App;
