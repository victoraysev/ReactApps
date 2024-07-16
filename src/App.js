import logo from './logo.svg';
import './App.css';
import RandomQuoteMachine from './component/RandomQuote.jsx';
import MarkdownPreviewer from "./component/MarkdownPreviewer";
import DrumMachine from "./component/DrumMachine";
import Calculator from "./component/Calculator";
import React from "react";

function App() {
    return (
        <div className="App">
            {/*<RandomQuoteMachine />*/}
            {/*<MarkdownPreviewer></MarkdownPreviewer>*/}
            {/*<DrumMachine></DrumMachine>*/}
            <Calculator></Calculator>
            <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>

        </div>
    );
}

export default App;
