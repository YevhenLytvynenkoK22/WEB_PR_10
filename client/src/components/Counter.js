import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/counter')
      .then(res => res.json())
      .then(data => setCount(data.value));
  }, []);

  const updateServer = (newVal) => {
    fetch('http://localhost:5000/counter', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: newVal })
    });
  };

  const increment = () => {
    const newVal = count + 1;
    setCount(newVal);
    updateServer(newVal);
  };

  const decrement = () => {
    const newVal = count - 1;
    setCount(newVal);
    updateServer(newVal);
  };

  return (
    <div>
      <h2>Лічильник: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
