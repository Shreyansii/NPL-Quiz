// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time === 0) return; // Stop timer at 0

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount
  }, [time]);

  return (
    <div>
      <h1>Countdown: {time}s</h1>
    </div>
  );
};

export default CountdownTimer;
