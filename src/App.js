import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Soda from './components/Soda';
import Eggs from './components/Eggs';
import GranolaBar from './components/GranolaBar';
import './styles/App.css';

export function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/eggs" element={<Eggs />} />
        <Route path="/granola-bar" element={<GranolaBar />} />
      </Routes>
    </>
  );
}