import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">Clicky Game</a>
                    </li>
                    <li className="how-to">
                        Click an Image to begin!
                    </li>
                    <li>
                        <p>
                            Score: <span className="score" defaultValue="0"/> 
                            | Top Score: <span className="top-score" defaultValue="0"/>
                        </p>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default Navbar;