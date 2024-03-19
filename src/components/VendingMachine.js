import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Soda from './Soda'; 
import Eggs from './Eggs';
import GranolaBar from './GranolaBar';
import '../styles/App.css';
import vendingMachine from '../images/snack_6588c2e6-8623-44c8-af9e-847e1c5ee46b_No.png';

const VendingMachine = () => {
  return (
    <div>
      <h1>Welcome to the Funny Vending Machine!</h1>
      <div className="vending-machine-container">
        <img src={vendingMachine} alt="Vending Machine" className="vending-machine-image"/>
        <div className="snacks-container">
          <Link to="/soda" className="snack-button">Soda</Link>
          <Link to="/eggs" className="snack-button">Eggs</Link>
          <Link to="/granola-bar" className="snack-button">Granola Bar</Link>
        </div>
        <Routes>
          <Route path="/soda" element={<Soda />} />
          <Route path="/eggs" element={<Eggs />} />
          <Route path="/granola-bar" element={<GranolaBar />} />
        </Routes>
      </div>
    </div>
  );
};

export default VendingMachine;
