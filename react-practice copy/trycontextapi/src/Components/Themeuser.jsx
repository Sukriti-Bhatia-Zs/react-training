import React, { useEffect } from "react";
import { Theme } from './Themecontextprovider'
import { useContext, useRef, useReducer } from "react";

    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return { coumt: state.count + 1 };
        }
        if (action.type === "DECREMENT") {
            return { count: state.count - 1 };
        }
        if (action.type === "RESET") {
            return { count: 0 }
        }
    }

const Themeuser = () => {


    const { currenttheme, choosetheme } = useContext(Theme);

    const doubleclick = () => {
        choosetheme();
    }

    console.log(currenttheme);


    const bottomref = useRef();


    useEffect(() => {
        bottomref.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
        })
    })



    const [state, dispatch] = useReducer(reducer, {
        count: 0
    })



    return (

        <div ref={bottomref} style={{
            height: "100vh", width: "100vw", display: "flex", justifyContent: "space-around",
            alignItems: "center", backgroundColor: currenttheme.backgroundcolor,
            color: currenttheme.color, flexDirection: "column"
        }}
            onDoubleClick={doubleclick}
        >
            <div>
                <h1>Theme : {currenttheme.backgroundcolor}</h1>
            </div>
            <div style={{
                width: "100%", display: "flex", justifyContent: "center",
                alignItems: "center", flexDirection: "column", gap: "1rem"
            }}
            >
                <div className="reset">
                    <button onClick={() => dispatch({ type: "RESET" })} onDoubleClick={(e) => e.stopPropagation()} style={{ fontSize: "1rem", padding: "1rem", backgroundColor: "lightblue", borderRadius: "10%" }}>Reset</button>
                </div>
                <div className="inc-dec" style={{
                    width: "100%", display: "flex", justifyContent: "center",
                    alignItems: "center", flexDirection: "row", gap: "2rem"
                }}
                >
                    <button onClick={() => dispatch({ type: "INCREMENT" })} onDoubleClick={(e) => e.stopPropagation()} style={{ fontSize: "1rem", padding: "1rem", backgroundColor: "lightblue", borderRadius: "10%" }}>Increment</button>
                    <p onDoubleClick={(e) => e.stopPropagation()}>Count :<span>{state.count}</span></p>
                    <button onClick={() => dispatch({ type: "DECREMENT" })} onDoubleClick={(e) => e.stopPropagation()} style={{ fontSize: "1rem", padding: "1rem", backgroundColor: "lightblue", borderRadius: "10%" }}>Decrement</button>
                </div>
            </div>

        </div>
    )


}

export default Themeuser