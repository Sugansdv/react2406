import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MarkdownPreviewer from './components/MarkdownPreviewer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<MarkdownPreviewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
