import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Oclock = () => {
    // Initializing state variables
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timeLeft, setTimeLeft] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);
    const [isSession, setIsSession] = useState(true);
    const timerId = useRef(null);

    // Managing the timer using useEffect
    useEffect(() => {
        if (isRunning) {
            timerId.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev === 0) {
                        if (isSession) {
                            setIsSession(false);
                            return breakLength * 60;
                        } else {
                            setIsSession(true);
                            return sessionLength * 60;
                        }
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerId.current);
        }
        return () => clearInterval(timerId.current);
    }, [isRunning, breakLength, sessionLength, isSession]);

    // Playing beep sound when timeLeft reaches 0
    useEffect(() => {
        if (timeLeft === 0) {
            document.getElementById('beep').play();
        }
    }, [timeLeft]);

    // Formatting time to mm:ss format
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Handling reset button click
    const handleReset = () => {
        setBreakLength(5);
        setSessionLength(25);
        setTimeLeft(1500);
        setIsRunning(false);
        setIsSession(true);
        const beep = document.getElementById('beep');
        beep.pause();
        beep.currentTime = 0;
    };

    // Handling increment and decrement for break length
    const handleBreakIncrement = () => {
        if (breakLength < 60) {
            setBreakLength(breakLength + 1);
        }
    };

    const handleBreakDecrement = () => {
        if (breakLength > 1) {
            setBreakLength(breakLength - 1);
        }
    };

    // Handling increment and decrement for session length
    const handleSessionIncrement = () => {
        if (sessionLength < 60) {
            setSessionLength(sessionLength + 1);
            setTimeLeft((sessionLength + 1) * 60);
        }
    };

    const handleSessionDecrement = () => {
        if (sessionLength > 1) {
            setSessionLength(sessionLength - 1);
            setTimeLeft((sessionLength - 1) * 60);
        }
    };

    // Handling start/stop button click
    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    return (
        <div id="clock">
            <div id="break-label">
                Break Length
                <button id="break-decrement" onClick={handleBreakDecrement}>-</button>
                <span id="break-length">{breakLength}</span>
                <button id="break-increment" onClick={handleBreakIncrement}>+</button>
            </div>
            <div id="session-label">
                Session Length
                <button id="session-decrement" onClick={handleSessionDecrement}>-</button>
                <span id="session-length">{sessionLength}</span>
                <button id="session-increment" onClick={handleSessionIncrement}>+</button>
            </div>
            <div id="timer-label">{isSession ? 'Session' : 'Break'}</div>
            <div id="time-left">{formatTime(timeLeft)}</div>
            <button id="start_stop" onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button id="reset" onClick={handleReset}>Reset</button>
            <audio id="beep" src="https://www.soundjay.com/button/beep-07.wav"></audio>
        </div>
    );
};
export default Oclock;
