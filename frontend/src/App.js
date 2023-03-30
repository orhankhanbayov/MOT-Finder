import './App.css';
import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

import HomePage from '../src/homepage/homepage';
function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      </style>
      <Routes>
        <Route path="/" element={<HomePage navigate={useNavigate()} />} />
      </Routes>
    </div>
  );
}

export default App;
