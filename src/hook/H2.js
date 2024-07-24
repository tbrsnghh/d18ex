import React, { useState, useEffect } from 'react'

export default function H2() {
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log("Side effect");
        const x = setInterval(()=>{
            console.log("load count")
            setCount(prevState => prevState + 1)
        })
        return () => {
            clearInterval(x);
            console.log("Đây là clean up")
        };
    }, []);
    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
}