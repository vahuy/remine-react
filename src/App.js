import React, {Component} from "react";
import Header from "./header/Header";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header></Header>
                </div>
                <div>
                    <h1>App component</h1>
                </div>
            </div>
        )
    }
}

export default App;
