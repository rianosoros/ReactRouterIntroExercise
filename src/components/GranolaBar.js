import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import granolabar from '../images/giphy.gif';

const Soda = () => {
  return (
    <div className="snack-page-container">
      <h2>Granola bar</h2>
      <img src={granolabar} alt="granola bar" className="snack-image" />
      <p>Mmmmm, nom nom nom. Nutritious! </p>
      <Link to="/" className="snack-button">Back to the Vending Machine</Link>
    </div>
  );
};

export default Soda;