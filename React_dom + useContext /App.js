import './App.css';
import React, { useState, createContext, useContext } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import {Profile} from './pages/Profile';

export const AppContext = createContext();

function App() {


  const [username,setUsername] = useState("Karan");
  return (
    <div className='App'>
      <AppContext.Provider value ={{username,setUsername}}>
      <Router>
        <Navbar /> 
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu />} /> 
          <Route path= "/Profile" element = {<Profile />}/>
          <Route path="/contact" element={<Contact />} /> 
          <Route path="*" element={<h1> 404 Page Not Found </h1>} /> 
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
