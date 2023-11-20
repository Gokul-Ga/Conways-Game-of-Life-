import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import GameOfLife from './components/GameOfLife';


const App = () => {
  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Navbar/>
      <Routes>
        
        <Route path="/" element={<Homepage/>}/> 
        <Route path="/gameoflife" element={<GameOfLife />} />
       
        
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
