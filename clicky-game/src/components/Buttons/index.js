import React from "react";
import "./style.css";
import images from "./assets/images.js";

function Buttons(props) {
    console.log(props)
    return (
        <div className="container">
            {images.map((img, key) => {
                return (
                    <img className="btn"
                            src={img.src}
                            alt={img.alt}
                            key={key}
                            onClick={props.handleIncrement}></img>
                );
            })}
        </div>
    );
};

export default Buttons;