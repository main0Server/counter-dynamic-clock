import React, {useState} from "react";
import DynamicClock from "./DynamicClock";

function App() {

  const githubRepo = "https://github.com/main0Server/counter-dynamic-clock";

  // HOOKS. starting state!
  const [count, setCount] = useState(0);
  
  const now = new Date().toLocaleTimeString();

  const [dynamicClock, setDynamicClock] = useState(now);

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
            setTime(now)
          }}>
          Get Time
        </button>
      </div>
      <br />
      <DynamicClock dynamicClock={dynamicClock}/>
      <a href={githubRepo} rel="noreferrer" target="_blank" >GitHub Repository</a>
    </div>
  );
}

export default App;