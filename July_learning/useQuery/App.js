import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Home } from "./pages/Home.js";
// import { Menu } from "./pages/Menu.js";
// import { Contact } from "./pages/Contact.js";
// import {NotFound} from "./pages/NotFound.js";
import { QueryClient , QueryClientProvider } from '@tanstack/react-query'
// import { Router, Routes } from 'react-router-dom';

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
     <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path='/home' element= {<Home />} />
        </Routes>
      </Router>

     </QueryClientProvider>
    </div>
  );
}

export default App;

