import logo from './logo.svg';
import './App.css';
import RandomQuoteMachine from './component/RandomQuote.jsx';
import MarkdownPreviewer from "./component/MarkdownPreviewer";
import React from "react";

function App() {
    return (
        <div className="App">
            {/*<RandomQuoteMachine />*/}
            <MarkdownPreviewer></MarkdownPreviewer>
            <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>

        </div>
    );
}

export default App;
