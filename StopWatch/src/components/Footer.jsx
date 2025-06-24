import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">⏱️ TimerApp &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
