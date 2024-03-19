import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import eggs from '../images/tumblr_m7zqnxuDkw1qzn4nho1_500.gif';

const Eggs = () => {
  return (
    <div className="snack-page-container">
      <h2>Eggs</h2>
      <img src={eggs} alt="eggs" className="snack-image" />
      <p>EGGS DO NOT BELONG IN A VENDING MACHINE!! THAT'S GROSS!</p>
      <Link to="/" className="snack-button">Back to the Vending Machine</Link>
    </div>
  );
};

export default Eggs;