import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import { Home } from './components/home';
import { Contact } from './components/contact';
import { Login } from './components/login';
import { NotFound } from './components/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
