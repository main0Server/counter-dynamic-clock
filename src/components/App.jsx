import React, {useState} from "react";
import DynamicClock from "./DynamicClock";

function App() {
  // HOOKS. starting state!
  const [count, setCount] = useState(0);

  const [dynamicClock, setDynamicClock] = useState(new Date().toLocaleTimeString());

  const [staticClock, setTime] = useState(setDynamicClock);

  function refresh() {
    setDynamicClock(new Date().toLocaleTimeString())
  }
  setInterval(refresh, 1000);

  return(
    <div className="container">
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => { setCount(count - 1)}}>-</button>
      <button onClick={() => { setCount(count + 1)}}>+</button>
    </div>
      <br />
      <div className="staticClock">
        <h1 className="time" placeholder="0">{staticClock ? staticClock : 0}</h1>
        <button
          className="getTime"
          onClick={() => {
            setTime(new Date().toLocaleTimeString())
          }}>
          Get Time
        </button>
      </div>
      <br />
      <DynamicClock dynamicClock={dynamicClock}/>
    </div>
  );
}

export default App;