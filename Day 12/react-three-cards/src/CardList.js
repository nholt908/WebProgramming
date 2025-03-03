import React from "react";
import Card from "./Card";

function CardList(){
    const cards = [
        {title: "Card 1", content: "First", color: "black", buttonColor: "lightGrey"},
        {title: "Card 2", content: "Second", color: "green", buttonColor: "lightGreen"},
        {title: "Card 3", content: "Third", color: "blue", buttonColor: "lightBlue"}
    ];
    
    return (
        <div className="container">
            {
                cards.map((card, index) => (
                    <Card key={index}{...card}/>
                ))
            }
        </div>
    );
}

export default CardList;