import { useState } from "react";

export default function RegisterPage() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState('');
  
    const handleValue1Change = (e) => {
      const inputValue = e.target.value;
      if (/^\d*\.?\d*$/.test(inputValue)) {
        setValue1(inputValue);
      }
    };
  
    const handleValue2Change = (e) => {
      const inputValue = e.target.value;
      if (/^\d*\.?\d*$/.test(inputValue)) {
        setValue2(inputValue);
      }
    };
  
    const handleAdd = () => {
      setResult((parseFloat(value1) + parseFloat(value2)).toString());
    };
  
    const handleSubtract = () => {
      setResult((parseFloat(value1) - parseFloat(value2)).toString());
    };
  
    const handleMultiply = () => {
      setResult((parseFloat(value1) * parseFloat(value2)).toString());
    };
  
    const handleDivide = () => {
      if (parseFloat(value2) !== 0) {
        setResult((parseFloat(value1) / parseFloat(value2)).toString());
      } else {
        setResult('Error: Division by zero');
      }
    };
  
    return (
      <div className="calculator">
        <div className="input-container">
          <input
            type="text"
            value={value1}
            onChange={handleValue1Change}
            placeholder="Enter a number"
            className="input-field"
          />
          <input
            type="text"
            value={value2}
            onChange={handleValue2Change}
            placeholder="Enter a number"
            className="input-field"
          />
        </div>
        <div className="button-container">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={handleMultiply}>Multiply</button>
          <button onClick={handleDivide}>Divide</button>
        </div>
        <h1 className="result">{result}</h1>
      </div>
    );
  }
  
  function App() {
    return (
      <div className="app">
        <RegisterPager />
      </div>
    );
  }
