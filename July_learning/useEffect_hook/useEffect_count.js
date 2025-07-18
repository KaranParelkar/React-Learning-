import { useState , useEffect, use } from 'react';
import './App.css';

function App() {

const [count,setCount] = useState(0);


useEffect(() => {
  document.title = `Count = ${count}`
},[count])
  return (
    <div className="App">
      <h3>Click me to learn more about managing Side Effects using useEffect </h3>
      <button onClick={() => setCount(count+1)}>Increase Count</button>
      {count}
    </div>
  );
}

export default App;

