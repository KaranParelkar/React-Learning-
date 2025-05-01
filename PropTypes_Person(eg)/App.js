
import './App.css';
import React, { useState } from 'react';
import { Form } from './Form';
import { useToggle } from './useToggle';
import { useCount } from './useCount';
import { Person } from './Person'


function App() {

  return (
    <div className='App'>
      <Person name='Karan' age={20} email="karan.parelkar2005@gmail.com" isMarried={false} friends={["Jayan", "Pratham", "Devansh", "Shlok", "Laali"]} />
    </div>
  );
}

export default App;
