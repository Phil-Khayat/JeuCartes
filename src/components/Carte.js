import React, { Component } from "react";
import '../css/Carte.css';

function Carte ({carte}) {

    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

    // console.log("transform syntax : ", transform);

    return (
        <div>
            {/* <img src={carte.image} style={transform}></img> */}
            <img className="Carte" src={carte.image} style={ {transform} }></img>
        </div>
    );
}

export default Carte;