import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count" and initialize it to 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Use of useState</h3>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
