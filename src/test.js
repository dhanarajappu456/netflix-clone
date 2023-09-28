import React, { useState, useEffect } from "react";
import { Route, Router } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect has been called after the render.");
  });

  return (
    <div style={{ height: "700px" }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
