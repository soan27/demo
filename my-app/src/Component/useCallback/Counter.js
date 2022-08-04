import React, { useState, memo, useCallback } from "react";
import Content from "./Content";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <Content onIncrease={handleIncrease} />
      <p>{count}</p>
      {/* <button onClick={handleIncrease}>+</button> */}
    </div>
  );
}

export default Counter;
