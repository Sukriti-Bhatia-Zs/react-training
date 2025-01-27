import React, { useState } from "react";
import './Dnd.css'

const Dnd=()=>{

    const data=[
        {id:1,text:"element 1"},
        {id:2,text:"element 2"},
        {id:3,text:"element 3"},
        {id:4,text:"element 4"},
        {id:5,text:"element 5"},
    ]

    const [list,setList]=useState(data);
    const [draggeditem,setDraggedItem]=useState(null);

    // invoked on starting dragging
    const onDragStart=(event,index)=>{
        setDraggedItem(index);
    }

    // invoked when item is over another item and mouse hasnt been clicked up prevents default behaviour of not dropping
    const onDragOver=(event)=>{
        event.preventDefault();
    }

    // invoked when item has been dropped and now here working is done
   const  onDrop=(event,index)=>{
        event.preventDefault();
        // if the item selected to be dropped and index where to be dropped is same means nothing to be done
        if(index===draggeditem){
            return 
        }

        // create new list where dont put the element which has been dragged
        let newlist=list.filter((element,idx)=>idx!==draggeditem);
        // putting at index the draggeditem value
        // put in newlist list[draggeditem] at index and 0 means not remove anything
        newlist.splice(index,0,list[draggeditem]);

        setList(newlist);
    }



    return (
        <div className="dndmain">
            <div className="dnddivs">
                {
                    list.map((element,index)=>{
                        return (
                            <div
                                onDragStart={(e)=>onDragStart(e,index)}
                                onDragOver={(e)=>onDragOver(e)}
                                onDrop={(e)=>{onDrop(e,index)}}
                                className="dndelements"
                                draggable
                            >
                                {element.text}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dnd