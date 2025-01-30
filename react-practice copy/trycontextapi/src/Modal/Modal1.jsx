import React, { useEffect, useState } from "react";
import Content from "./Content";

const Modal1 = () => {

    const [show, setShow] = useState(false);

    return (
        <div>

            <div className="modalmain">
                {show && <div><Content show={show} setShow={setShow} /></div>}
                <div>
                    <button onClick={() => setShow(true)} className="btn">Open Modal</button>

                </div>
            </div>

        </div>


    )

}

export default Modal1;