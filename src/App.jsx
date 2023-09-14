import React from 'react';
import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App
