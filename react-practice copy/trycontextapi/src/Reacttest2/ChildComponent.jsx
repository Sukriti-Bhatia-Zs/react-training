
import img1 from "../images/dice1.png";
import img2 from "../images/dice2.png";
import img3 from "../images/dice3.png";
import img4 from "../images/dice4.png";
import img5 from "../images/dice5.png";
import img6 from "../images/dice6.png";
import React from "react";

const ChildComponent = ({ inputValue ,error,showbtn}) => {

    console.log(inputValue,error,showbtn)
  
  const images = [img1, img2, img3, img4, img5, img6];

  let inputarr=[]
  for(let i=0;i<inputValue;i++){
    inputarr.push(i);
  }

  return (
    <>
      {(
        <div className="diving">
          {inputValue>0 && !error && showbtn && inputarr.map((element, index) => (
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







