import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import GameOfLife from './components/GameOfLife';


const App = () => {
  return (
    
    <Router>
       <Navbar/>
      <Routes>
        
        <Route path="/" element={<Homepage/>}/> 
        <Route path="/gameoflife" element={<GameOfLife />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;
