import React, { useEffect } from "react";

const Number=({props1})=>{

    const {num,name,count}=props1


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