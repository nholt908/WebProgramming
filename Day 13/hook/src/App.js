import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState(' blue')

  function decreaseCount() {
    setCount(prevCount => prevCount - 1)
  }

  function increaseCount() {
    setCount(prevCount => prevCount - 1)
    setTheme(' red')
  }

  return (
    <>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default App;
