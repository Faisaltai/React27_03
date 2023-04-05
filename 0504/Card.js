import React from "react";
 
function Card(props){
    return <>
    <div class="card" style={{width: "18rem"}}>
  <img src={props.carimg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.value}</h5>
    <p class="card-text">{props.description}</p>
    <a href="google.com" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </>;
}
export default Card;
