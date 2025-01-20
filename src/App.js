import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/about-us">About Us</Link>
      </nav>

      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
