import React, { useState, useEffect } from 'react';
import './RandomQuote.css';
const quotes = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    // Add more quotes as needed
];
const RandomQuoteMachine = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    // Fetch a random quote
    const fetchQuote = async () => {
        const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);
        const data = quotes[randomNumber];
        setQuote(data.text);
        setAuthor(data.author);
    };

    // useEffect to run fetchQuote once when the component mounts
    useEffect(() => {
        fetchQuote();
    }, []); // Empty dependency array means this effect runs once on mount

    const handleNewQuote = () => {
        fetchQuote();
    };

    return (
        <div id="quote-box">
            <div id="text">{quote}</div>
            <div id="author">- {author}</div>
            <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} target="_blank" rel="noopener noreferrer">
                Tweet
            </a>
        </div>
    );
};

export default RandomQuoteMachine;
