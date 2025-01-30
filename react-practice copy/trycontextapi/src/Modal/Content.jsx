import React, { useState } from "react";

const Content = ({ show, setShow }) => {

    const [removeanimtion, setRemoveAnimation] = useState(false);

    const handleClick = () => {
        setRemoveAnimation(true)
        setTimeout(() => {
            setShow(false)
        }, 500);
    }

    return (
        <>
            <div className="outdiv">
                <div className={`crossmodal ${!removeanimtion ? 'fade-in-image' : 'fade-out-image'}`}>
                    <div>
                        <h1 style={{ textAlign: "center" }}>MODAL 1 <span className="cross " onClick={handleClick}>x</span></h1>
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>

            </div>


        </>

    )





}

export default Content