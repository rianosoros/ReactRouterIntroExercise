import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import soda from '../images/200w.gif';

const Soda = () => {
  return (
    <div className="snack-page-container">
      <img src={soda} alt="Soda" className="snack-image" />
      <h2>Soda</h2>
      <p>Enjoy a refreshing soda from our vending machine!</p>
      <Link to="/" className="snack-button">Back to the Vending Machine</Link>
    </div>
  );
};

export default Soda;