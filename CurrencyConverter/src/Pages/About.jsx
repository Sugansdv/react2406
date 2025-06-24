import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-3">About CurrencyApp</h2>
        <p>
          <strong>CurrencyApp</strong> is a simple and powerful currency converter built with React and Bootstrap. 
          It helps users quickly convert between currencies using real-time exchange rates from a public API.
        </p>
        <p>
          <strong>Features:</strong>
        </p>
        <ul>
          <li>Live exchange rates</li>
          <li>Support for over 150 currencies</li>
          <li>Intuitive swap function</li>
          <li>Responsive and user-friendly design</li>
        </ul>
        <p className="text-muted text-end">© 2025 CurrencyApp</p>
      </div>
    </div>
  );
}

export default About;
