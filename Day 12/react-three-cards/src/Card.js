import React from "react";
import "./Card.css"; //Import CSS for styling

function Card({title, content, color, buttonColor}){
    const clickMe = () =>{
        alert(title);
    };
    
    return (
        <div className="card" style={{backgroundColor: color}}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={clickMe} style={{backgroundColor: buttonColor}}>Click Me!</button>
        </div>
    );
}

export default Card;