import React from "react";

const Childprops=(props)=>{

    console.log(props);

    return (

        <div className="Childmain">
            <div className="childimg">
                <img src={props.img} alt="" height={"300px"} width={"300px"}/>
            </div>
            <div className="childdetails" style={{color:'black'}}>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div className="desc">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Childprops