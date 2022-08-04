import React, { memo } from "react";

function Content({ onIncrease }) {
  console.log("re-render");
  return (
    <div>
      <h1>Learn useCallback </h1>
      <h5>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quod
        facilis cumque odio? Repellat dignissimos blanditiis quasi ipsa ipsum!
        A, qui. Accusantium corporis esse adipisci veritatis earum. Nemo,
        veritatis tempora.
      </h5>
      <button onClick={onIncrease}>Click me</button>
    </div>
  );
}

export default memo(Content);
