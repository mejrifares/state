import React, { useState, useEffect } from "react";
import {Badge} from "react-bootstrap";

const Counter = () => {
  const [counter,] = useState();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervall = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(intervall);
  }, [timer]);
  return (
    <>
      <div className="counter">  
        <span className="edit">{counter}</span>
      </div>

      <Badge variant="secondary" className="timer">
        Timer
      </Badge>
      <h1>{timer}</h1>
    </>
  );
};

export default Counter;