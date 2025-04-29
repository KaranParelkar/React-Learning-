import './App.css';
import React, { useState } from 'react';
import { Form } from './Form';
import { useToggle } from './useToggle';
import { useCount } from './useCount';


function App() {
  const [count,Increase,Decrease,setZero] = useCount(0)

  
  
  return (
    <div className='App'>
      <button onClick={Increase}> Increase Counter </button>
      <button onClick={Decrease}> Decrease Counter </button>
      <button onClick={setZero}> Set counter to zero </button>
     <h1>{count}</h1>
    </div>
  );
}

export default App;
