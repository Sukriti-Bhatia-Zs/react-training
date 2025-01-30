
import img1 from "../images/dice1.png";
import img2 from "../images/dice2.png";
import img3 from "../images/dice3.png";
import img4 from "../images/dice4.png";
import img5 from "../images/dice5.png";
import img6 from "../images/dice6.png";
import loader from "../images/loader.gif"
import React, { useState ,useEffect} from "react";
import '../Buttons/Buttonscss.css'

const ChildComponent = ({ inputValue ,error,showbtn,loading}) => {

    console.log(inputValue,error,showbtn,loading)
  
  const images = [img1, img2, img3, img4, img5, img6];

  let [inputarr,setInputArr]=useState([])

  useEffect(() => {
    if (inputValue > 0 && !error && showbtn && !loading) {
      setInputArr([]); 
      for (let i = 0; i < inputValue; i++) {
        setTimeout(() => {
          setInputArr((prev) => [...prev, i]); 
        }, 1000 *(i+1)); 
      }
    }
  }, [inputValue, error, showbtn, loading]);

  return (
    <>
      {(
        <div className="diving">
           {loading && (
            <div className="loader">
              <img src={loader} alt="loader" />
            </div>)}
          {inputValue>0 && !error && showbtn && !loading && inputarr.map((element, index) => (
            <button key={index} style={{backgroundColor:"lightgrey",border:"1px solid lightgrey"}}>
              <img
                src={images[index]} 
                alt={`dice ${index + 1}`}
                height={'100px'}
                width={'100px'}
              />
            </button>
          ))}
        </div>
      )}
    </>
  
  );
};

export default ChildComponent;







