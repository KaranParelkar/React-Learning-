// App.js
import { useState } from 'react';
import './App.css';

function App() {
  let [age,setAge] = useState(0);

  const Increase = () => {
    setAge(age + 1);
  }
  const Decrease = () => {
    setAge(age - 1);
  }

const setZero = () => {
    setAge(0);
  }

  return (
    
    <div className="App">
      <h1>Age is : {age} </h1>
      <div className="App">
        <button onClick={Increase}>Increase Age</button>
        <button onClick={Decrease}>Decrease Age</button>
        <button onClick={setZero}>Set Zero Age</button>
      </div>
    </div>
  );
}


export default App;
