import './App.css';
import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

import HomePage from '../src/homepage/homepage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage navigate={useNavigate()} />} />
      </Routes>
    </div>
  );
}

export default App;
