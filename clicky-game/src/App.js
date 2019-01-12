import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <Buttons/>
            <Footer/>
        </div>
    );
};

export default App;