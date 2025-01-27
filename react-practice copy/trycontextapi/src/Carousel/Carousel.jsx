import React, { useState } from "react";
import './Carousel.css'

const Carousel=()=>{

    const images=[
        "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
        "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
        "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg",
    ]

    const [imagesindex,setImagesIndex]=useState(0);

    const handleprevclick=()=>{
        if(imagesindex === 0){
            // point to last
            setImagesIndex(images.length-1);
        }
        else{
            setImagesIndex(prev=>prev-1);
        }
    }

    const handlenextclick=()=>{
        if(imagesindex === images.length-1){
            // point to first
            setImagesIndex(0)
        }
        else{
            setImagesIndex(prev=>prev+1)
        }
    }



    return (
        <div className="Maincomponent">
            <div className="imagediv">
                <img src={images[imagesindex]}/>
                <button className="prevbtn" onClick={handleprevclick}>Prev</button>
                <button className="nextbtn" onClick={handlenextclick}>Next</button>
            </div>
        </div>
    )

}

export default Carousel