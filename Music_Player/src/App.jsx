import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Player from './components/Player';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="container mt-4">
        <Player />
      </div>
    </ThemeProvider>
  );
}

export default App;
