import React, { useEffect } from "react";
import './Grid.css'
import { useState } from "react";

const Grid=()=>{

    const btn=['false','false','false','false','false','false','false','false','false'];

    const [btns,setBtns]=useState(btn);
    const [count,setCount]=useState(1)

    const [clicked,setClicked]=useState([])

    const handleclick=(indx)=>{
        if(indx!==4 && count<=8 && btns[indx]==='false'){
            setBtns((prev)=>{
                const newbtns=[...prev];
                newbtns[indx]="true";

                return newbtns;
            })
            setCount(prev=>prev+1);
            console.log(count)
        }
        if(!clicked.includes(indx)){
            setClicked(prev=>{
                const newclicked=[...prev];
                newclicked.push(indx);

                return newclicked;
            })
        }
        console.log(btns)
        console.log(clicked)
    }

    const removeclick=()=>{

        for(let i=clicked.length-1;i>=0;i--){
            setTimeout(()=>{
                setBtns(prev=>{
                    const newbtns=[...prev]
                    newbtns[i]="true";

                    return newbtns
                })
            },clicked.length-i*1000);
        }

        setClicked([]);
        setCount(0);
    }


    useEffect(()=>{
        if(count===8){
            removeclick()
        }
    },[count])



    return (
        <div className="maingrid">
            <div className="griddivs">
                {
                    btns.map((element,indx)=>{
                        return <button onClick={(e)=>handleclick(indx)} className={indx!==4 && btns[indx]!=='true'? 'normal':'isclicked'}key={indx}>btn {indx}</button>
                    })      
                }
            </div>
        </div>

    )
}

export default Grid