import React from "react";
import "./Card.css"; //Import CSS for styling

function Card({title, content, color}){
    return (
        <div className="card" style={{BackgroundColor: color}}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}