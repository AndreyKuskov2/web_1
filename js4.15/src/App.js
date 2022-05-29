import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [seconds, setSecond] = useState(0);

  const tick = () => {
    setSecond(seconds + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(seconds + 1);
    }, 1000)
    return () => clearInterval(interval);
  }, [seconds])

  return (
    <div className="App">
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default App;
