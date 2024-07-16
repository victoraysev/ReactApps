import React, {useState} from 'react';
import './Calculator.css';
const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [expression, setExpression] = useState('');

    const handleNumber = (number) => {
        if (display === '0') {
            setDisplay(number);
        } else {
            setDisplay(display + number);
        }
    };
    const handleOperator = (operator) => {
        setExpression(expression + display + operator);
        setDisplay('0');
    };
    const handleClear = () => {
        setDisplay('0');
        setExpression('');
    };
    const handleEquals = () => {
        const result = eval(expression + display);
        setDisplay(result.toString());
        setExpression('');
    };
    const handleDecimal = () => {
        if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };
    return (
        <div id="calculator">
            <div id="display">{display}</div>
            <button id="clear" onClick={handleClear}>AC</button>
            <button id="divide" onClick={() => handleOperator('/')}>/</button>
            <button id="multiply" onClick={() => handleOperator('*')}>*</button>
            <button id="subtract" onClick={() => handleOperator('-')}>-</button>
            <button id="add" onClick={() => handleOperator('+')}>+</button>
            <button id="equals" onClick={handleEquals}>=</button>
            <button id="decimal" onClick={handleDecimal}>.</button>
            <button id="zero" onClick={() => handleNumber('0')}>0</button>
            <button id="one" onClick={() => handleNumber('1')}>1</button>
            <button id="two" onClick={() => handleNumber('2')}>2</button>
            <button id="three" onClick={() => handleNumber('3')}>3</button>
            <button id="four" onClick={() => handleNumber('4')}>4</button>
            <button id="five" onClick={() => handleNumber('5')}>5</button>
            <button id="six" onClick={() => handleNumber('6')}>6</button>
            <button id="seven" onClick={() => handleNumber('7')}>7</button>
            <button id="eight" onClick={() => handleNumber('8')}>8</button>
            <button id="nine" onClick={() => handleNumber('9')}>9</button>
        </div>
    );
};
export default Calculator;