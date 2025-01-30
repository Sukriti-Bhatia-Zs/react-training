
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
  let [reverseinputarr,setReverseInputArr]=useState([])

  useEffect(() => {
    if (inputValue > 0 && !error && showbtn && !loading) {
      setInputArr([]); 
      setReverseInputArr([])
      for (let i = 1; i < inputValue; i++) {
        setTimeout(() => {
          setInputArr((prev) => [...prev, i]); 
          setReverseInputArr((prev) => [...prev, inputValue-i]); 
        }, 1000 *(i+1)); 
      }
    }
  }, [inputValue, error, showbtn, loading]);

  useEffect(()=>{
    console.log(inputarr,reverseinputarr)
  })

  return (
    <>
      {(
        <div className="test3div">
           {loading && (
            <div className="loader">
              <img src={loader} alt="loader" />
            </div>)}
          {inputValue>0 && !error && showbtn && !loading && inputarr.map((element, index) => (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",width:"100%",gap:"2rem"}}>
              <button key={`button-${index}-1`} style={{backgroundColor:"lightgrey",border:"1px solid lightgrey"}}>
                <img
                  src={images[element-1]} 
                  alt={`dice ${index + 1}`}
                  height={'100px'}
                  width={'100px'}
                />
              </button>
              <button key={`button-${index}-2`} style={{backgroundColor:"lightgrey",border:"1px solid lightgrey"}}>
              <img
                src={images[reverseinputarr[index]-1]} 
                alt={`dice ${index + 1}`}
                height={'100px'}
                width={'100px'}
              />
            </button>
          </div>   
          ))}
        </div>
      )}
    </>
  
  );
};

export default ChildComponent;







