import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted>
          <source
            src="https://res.cloudinary.com/deecew6ga/video/upload/q_auto,f_auto/v1728732370/-1ced-4d69-b61e-4609c6ac87a6_ygzqc4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="pecfest-logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="navbar-overlay">
        <a href="#about">About</a>
        <a href="#competitions">Competitions</a>
        <a href="#events">Events</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#schedule">Schedule</a>
        <a href="#team">Team</a>
        <a href="#gallery">Gallery</a>
        <a href="#brochure">Brochure</a>
        <a href="#contact">Contact</a>
        <a href="#pecfest-website">Pecfest Website</a>
      </div>

      <div className="centre-overlay">
        <div>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="text">
          <h1>heading</h1>
          <p>description here</p>
          <button id="register" onClick={openModal}>
            Register
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Register</h2>
            <p>Registration form goes here.</p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
