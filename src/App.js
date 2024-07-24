import API01 from "./hook/API01";
import H1 from "./hook/H1";
import H2 from "./hook/H2";
import React, { useState, useEffect } from 'react'
import H3 from "./hook/H3";
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from "./hook/Students";
export default function App() {
  const [show, setShow] = useState(true)
  return (
   //  <H1/>
   //<H2/>
  //  <div>
  //   {
  //    show?<H3/> :"Not show here"
     
  //   }
  //   <button onClick={()=>setShow(!show)}>Show</button>
  //   {/* <API01/> */}
  //  </div>
  <Students/>
  );
}
