import React from "react";
import { useEffect,useState } from "react";
import Childprops from "./Childprops";
import '../Buttons/Buttonscss.css'


const Parentprops=()=>{
    const details = {
            img: "https://thumbs.dreamstime.com/z/word-welcome-to-team-wooden-blocks-old-boards-word-welcome-to-team-wooden-blocks-old-boards-327766487.jpg?ct=jpeg",
            title: "Welcome to the team",
            description: 'This is the development team, and we are thrilled to have you here! Together, we collaborate on cutting-edge projects, solve complex problems, and push the boundaries of innovation. Your skills and ideas are invaluable to us, and we can’t wait to see what we can achieve together!!'
    }
   
    return (
        <div className="main">
            <Childprops img={details.img} title={details.title} description={details.description}/>  
        </div>


    )



}

export default Parentprops