import React, { useRef , useEffect , useState} from 'react';

const InputFocus = () => {
    const [count, setCount] = useState(0);
    const previousCountRef = useRef(0);
  
    useEffect(() => {
      previousCountRef.current = count;
    }, [count]);
  
    return (
      <>
        <h1>useRef</h1>
        <p>Current count: {count}</p>
        <p>Previous count: {previousCountRef.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment count</button>
      </>
    );
};

export default InputFocus;
