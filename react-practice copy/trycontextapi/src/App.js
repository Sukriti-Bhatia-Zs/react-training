import './index.css'
import './App.css';
import Themecontextprovider from './Components/Themecontextprovider';
import Buttons4 from './Buttons/Buttons4';
import CustomHookUseIsMounted from './Customhooks/CustomHookUseIsMounted';
import CustomHookUseWindowSize from './Customhooks/CustomHookUseWindowSize';
import CustomHookUseCompSize from './Customhooks/CustomHookUseCompSize'
import FormValidation from './Form/FormValidation';
import Accordion from './ReactTestDay12/Accordian';


function App() {
  const arr = [
    {
      heading: "HTML",
      content:
        " The HyperText Markup Language or HTML is the standard markuplanguage for documents designed to be displayed in a web browser.",
    },
    {
      heading: "CSS",
      content:
        " Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      heading: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
    },
  ];
  return (
    <div>
      {arr.map((obj) => {
        return <Accordion heading={obj.heading} content={obj.content} />;
      })}
      {/* <Themecontextprovider/> */}
      {/* <Buttons4/> */}
      {/* <CustomHookUseIsMounted/> */}
      {/* <CustomHookUseWindowSize/> */}
      {/* <CustomHookUseCompSize/> */}
      {/* <FormValidation/> */}
    </div>
  );
}

export default App;
