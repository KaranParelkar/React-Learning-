import './App.css';
import React, { useState } from 'react';
import { Form } from './Form';
import { useToggle } from './useToggle';


function App() {
  
  const [isVisible, toggle] = useToggle()
  
  return (
    <div className='App'>
      <button onClick={() => {
      toggle()
      }}>
        {isVisible ? "Hide" : "Show"}
      </button>
    {isVisible && <h1>This is the Hidden Text</h1>}
    </div>
  );
}

export default App;
