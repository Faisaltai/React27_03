import React from "react";
export default function Eventdemo() {
    //normal javascript function
    // function callme() {
    //     alert("Function Called")
    // }

    // arrow function
const callme=()=>{
    alert("Arrow function Called");
}
return <>
        <h1>Events</h1>
        <button onClick={callme} className="btn btn-primary">Click Me</button>
        
    </>;
}