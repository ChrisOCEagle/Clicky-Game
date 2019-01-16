import React, { Component } from "react";
import "./style.css";

class Jumbotron extends Component {
    render() {
        return (
            <header className="header">
                <h1>Clicky Game!</h1>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </header>
        );
    };
};

export default Jumbotron;