import React from "react";
import "./style.css";

function Navbar(props) {
    console.log(props)
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li className="how-to">
                    Click an Image to begin!
                </li>
                <ul>
                    <li>
                        <p>Score: {props.count}</p>
                    </li>
                    <li>
                        <p>| Top Score: {props.topScore}</p>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navbar;