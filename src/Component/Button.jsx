import { useState } from "react"

export default function Button(){
    let[count,setCount] =useState(false);
   function clickHandler(){
    setCount(!count);
   
   }
   
    return (
        <div>
       <p onClick = {clickHandler}>
      { count?<i className="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i>
       }
       </p>
     
        
        </div>
    )
}