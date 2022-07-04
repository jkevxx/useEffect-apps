/**
 * IT'S NOT RECOMMENDED TO USE HEAVY PROCESSES OUTSIDE THE COMPONENT
 * console.log('pre-render')
 */

import React, { useState, useEffect } from "react";

function LifeCycle() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("useEffect []");

    return () => {
      console.log("cleanup useEffect []");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect no dependency");

    return () => {
      console.log("cleanup no dependency []");
    };
  });

  useEffect(() => {
    console.log("useEffect [counter1]");

    return () => {
      console.log("cleanup [counter1]");
    };
  }, [counter1]);

  useEffect(() => {
    console.log("useEffect [counter2]");

    return () => {
      console.log("cleanup [counter2]");
    };
  }, [counter2]);

  useEffect(() => {
    console.log("useEffect [counter1, counter2]");

    return () => {
      console.log("cleanup [counter1, counter2]");
    };
  }, [counter1, counter2]);

  return (
    <div>
      <h2>LifeCycle</h2>
      <p>Clicks c1: {counter1}</p>
      <p>Clicks c2: {counter2}</p>

      <button onClick={() => setCounter1(counter1 + 1)}>Increment c1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment c2</button>
    </div>
  );
}

export default LifeCycle;
