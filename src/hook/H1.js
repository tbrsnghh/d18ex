import React, { useState, useEffect } from 'react'

export default function H1() {
    const [count, setCount] = useState(1)
    const [number, setNumber] = useState(1)
    useEffect(()=>{
        console.log("Side effect")
    },[count])
    console.log("Render Hook Ex")
  return (
    <div>
        <h1>useEffect</h1>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Count up</button>
        <p>Number: {number}</p>
        <button onClick={()=>setNumber(number+1)}>Count up</button>
    </div>
  )
}
