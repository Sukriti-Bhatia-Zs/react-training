import React from "react";
import { useEffect, useState } from "react";
const UseEffectques = () => {

    const [count, setCount] = useState(1);

    console.log(5);

    useEffect(() => {

        console.log(4);

        return () => {
            console.log(1);
        };
    }, [count]);

    useEffect(() => {
        console.log(6);
        setCount((count) => count + 1);
    }, []);
    return <Child count={count} />;
};


export default UseEffectques;

function Child({ count }) {
    useEffect(() => {
        console.log(3);

        return () => {
            console.log(8);
        };
    }, [count]);
    return null;
}



