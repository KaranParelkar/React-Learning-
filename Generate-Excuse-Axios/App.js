import { useState ,useEffect } from 'react';
import './App.css';
import Axios from "axios";
import React from 'react';

function App() {
const [excuse,setExcuse] = useState(null)
  const fetchExcuse = (excuse) =>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) =>{
      setExcuse(res.data[0]);
    } )
  }
  
  return(
  <div className='App'>
    <h1>Generate an Excuse</h1>
   <button onClick={() =>{fetchExcuse("party")}}>Party</button>
   <br/>
   <button onClick={() => {fetchExcuse("family")}}>Family</button>
   <br/>
   <button onClick={() => {fetchExcuse("office")}}>Office</button>
   <h3>{excuse?.excuse}</h3>
  </div>);
}

export default App;
