import { useState } from 'react';

function MathTable() {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const createTable = () => {
    const number = Number(inputValue);
    const result = [];

    if (!isNaN(number)) {
      for (let index = 1; index <= 10; index++) {
        result.push(
          <div className='table' key={index}>
            {number} x {index} = {number * index}
          </div>
        );
      }
    }

    setResults(result);
  };

  return (
    <div className='container'>
      <span>Math Table</span>
        <input
          type="number" placeholder='Type here'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      <button onClick={createTable}>Calculate</button>
      <div className='result'>{results}</div>
    </div>
  );
}

export default MathTable;
