import React from "react";
import './card.css';

function Card(props) {
    return (
                <div className="card">
                    <img src={props.imgsrc} alt='dark-img'/>
                    <div className="downDiv">
                        <p>A NETFLIX ORIGINAL SERIES</p>
                        <h3>{props.name}</h3>
                        <a href={props.href} target='_blank' rel="noreferrer" >
                            <button> Watch now </button>
                        </a>
                    </div>
                </div>
    ); 
}

export default Card;