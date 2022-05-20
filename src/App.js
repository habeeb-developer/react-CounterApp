import React, {useState} from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>REACT COUNTER APP</h2>
        <a className="App-link" href="http://habeebi.in" target="_blank" rel="noopener noreferrer">
          - MADE BY MBHM -
        </a>
      <div className="Wrapper">
      {/* <button onClick={() => setCount(0)} className="Rest">Reset</button>  */}
      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))} className="Decr">-</button>
      <p className="Numb">{count}</p>
      <button onClick={() => (count >= 11 ? "" : setCount(count + 1))} className="Incr">+</button>
      </div>
    </div>
  );
}

export default App;
