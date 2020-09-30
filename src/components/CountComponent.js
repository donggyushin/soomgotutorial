import React from "react";

const CountComponent = ({ count, subCount, addCount }) => {
  return (
    <div>
      <button onClick={subCount}>-</button>
      <span style={{ margin: 20 }}>{count}</span>
      <button onClick={addCount}>+</button>
    </div>
  );
};

export default CountComponent;
