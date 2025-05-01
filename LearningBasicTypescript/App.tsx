import React from 'react';
import './App.css';
import { Person ,Country} from './Person';

function App() {
  const getName = (name:string): number => {
    return 99;
  } 

  return (
    <div className="App">
      <Person name = "Karan" age = {20} email = "karan.parelkar2005@gmail.com" isMarried = {false} friends = {["Jayan" , "Pratham" , "Shlok" , "Laali"]} country ={Country.India} />
    </div>
  );
}

export default App;
