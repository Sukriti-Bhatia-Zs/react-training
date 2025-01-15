import React, { useState } from "react";
import { createContext } from "react";

import Themeuser from "./Themeuser";

const themes = [
    { name: "light", backgroundcolor: "#A67EA2", color: "#000" },
    { name: "dark", backgroundcolor: "#000000", color: "#fff" },
    { name: "beige", backgroundcolor: "#F5F5DC", color: "#000" },
    { name: "blue", backgroundcolor: "#0000FF", color: "#000" },
    { name: "green", backgroundcolor: "#00FF00", color: "#000" },
    { name: "grey", backgroundcolor: "#808080", color: "#000" },
]

const Theme = createContext();

const Themecontextprovider = () => {

    const [themeindex, setthemeindex] = useState(0);

    const choosetheme = () => {
        setthemeindex((prev) => (prev + 1) % themes.length);
    }

    const currenttheme = themes[themeindex];


    return (
        <div>
            <div style={{ width: "100vw", height: "100vh", backgroundColor: "lightblue" }}></div>
            <Theme.Provider value={{ currenttheme, choosetheme }}>
                <Themeuser />
            </Theme.Provider>

        </div>
    )
}

export default Themecontextprovider;
export { Theme }
