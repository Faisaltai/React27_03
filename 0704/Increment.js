import React, { useState } from "react";
import './Increment.css'
export default function Increment(){
    // let val=0;
    const[val,setVal]=useState(0); //to change the state of val
    console.log(useState());
    const Increment=()=>{
        setVal(val+1);
        
        
    }
    return <>
    <h1>{val}</h1>
    <button className="btn btn-success"onClick={Increment}>Increment</button>
    </>;
}