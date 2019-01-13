import React, { Component } from "react";
import "./style.css";
import reactImage from "./assets/images";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                Clicky Game!
                <img src={reactImage} alt="react"></img>
            </footer>
        );
    };
};

export default Footer;