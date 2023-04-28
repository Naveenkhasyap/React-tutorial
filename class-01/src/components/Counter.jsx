import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  const [count2, setEmoji] = useState("😇");
  function handleClick(cnt, emj) {
    setCount(cnt);
    setEmoji(emj);
  }
  return (
    <>
      <div>
        Subscribers Counts {count} {count2}
      </div>
      <div>
        <button
          onClick={() => handleClick(count + 1, "😇")}
          style={{ backgroundColor: "lightgreen" }}
        >
          Subscribe ⬆
        </button>
        <button
          onClick={() => handleClick(count - 1, "😭")}
          style={{ backgroundColor: "red" }}
        >
          UnSubscribe ⬇
        </button>
      </div>
    </>
  );
}

export default Counter;
