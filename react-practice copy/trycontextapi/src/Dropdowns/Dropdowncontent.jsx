import React, { useState } from "react";

const Dropdowncontent = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null); 

    const currentcategory = (index) => {
        setOpenIndex(prev => (prev === index ? null : index)); // Toggle open category
    };

    return (
        <div>
            {data.map((obj, index) => {
                return (
                    <div style={{width:"100%",border:"1px solid black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} key={index}>
                        <div onClick={() => currentcategory(index)}>{obj.title}</div>
                        {/* Show options only for the currently open category */}
                        {openIndex === index && (
                            <div style={{width:"100%",border:"1px solid black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                                {obj.options.map((opt, i) => (
                                    <div style={{width:"100%",border:"1px solid black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} key={i}>{opt}</div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Dropdowncontent;
