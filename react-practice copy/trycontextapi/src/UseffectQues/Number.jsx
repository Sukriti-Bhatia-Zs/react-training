import React, { useEffect } from "react";

const Number=({num})=>{


    useEffect(()=>{
        console.log("child component useeffect called")
    })

    return (

        <div>
            Number is {num}

        </div>

    )


}

export default Number