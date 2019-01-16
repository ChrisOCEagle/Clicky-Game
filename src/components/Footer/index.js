import React, { Component } from "react";
import "./style.css";
import reactImage from './images/React.PNG';

const imgStyle = {
    width: "25px",
    align: "bottom"
};

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                Clicky Game!
                <img src={reactImage} alt="react" style={imgStyle}></img>
            </footer>
        );
    };
};

export default Footer;