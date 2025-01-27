import './index.css'
import './App.css';
import Themecontextprovider from './Components/Themecontextprovider';
import Buttons4 from './Buttons/Buttons4';
import CustomHookUseIsMounted from './Customhooks/CustomHookUseIsMounted';
import CustomHookUseWindowSize from './Customhooks/CustomHookUseWindowSize';
import CustomHookUseCompSize from './Customhooks/CustomHookUseCompSize'
import FormValidation from './Form/FormValidation';
import Throttle from './Throttling/Throttle';
import Carousel from './Carousel/Carousel';
import Dnd from './DragNDropList/Dnd';
import Dropdown from './Dropdowns/Dropdown';
import Grid from './GridLights/Grid';


function App() {
  return (
    <div>
      {/* <Themecontextprovider/> */}
      {/* <Buttons4/> */}
      {/* <CustomHookUseIsMounted/> */}
      {/* <CustomHookUseWindowSize/> */}
      {/* <CustomHookUseCompSize/> */}
      {/* <FormValidation/> */}
      {/* <Throttle/> */}
      {/* <Carousel/> */}
      {/* <Dnd/> */}
      {/* <Dropdown/> */}
      <Grid/>
    </div>
  );
}

export default App;


