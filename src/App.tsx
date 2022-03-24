import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Currency from './pages/Currency';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<Currency />} />
      </Routes>
    </div>
  );
}

export default App;
