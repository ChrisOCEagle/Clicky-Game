import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

class App extends React.Component {
    state = {
        count: 0,
        topScore: 0
    };

    handleIncrement = () => {
        if (this.state.count > this.state.topScore) {
            this.setState({
                count: this.state.count + 1,
                topScore: this.state.count
            });
        } else {
            this.setState({
                count: this.state.count + 1,
                topScore: this.state.topScore
            });
        }
    };

    render() {
        return (
            <div>
                <Navbar count={this.state.count} topScore={this.state.topScore}/>
                <Jumbotron/>
                <Buttons handleIncrement={this.handleIncrement}/>
                <Footer/>
            </div>
        );
    };
};

export default App;