import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './AboutUs.css';
import OurWork from './OurWork';

export default function Navbar({ isPageLoaded, submitLogout}) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (    
    <div className={`navbarMain ${isPageLoaded ? 'page-loaded' : ''}`}>
      <Router>
      <nav>
        <div className="logo">
          <img src='./stripes.svg' alt='Fraunhofer stripe'/>
        </div>
        <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
          <li><a href="https://www.sirios.fraunhofer.de/sirios/de">Fraunhofer SIRIOS </a></li>
          
          <li><a href="https://www.iosb.fraunhofer.de/">Fraunhofer ISOB</a></li>
          
          <li>
            <Link to='/our-work'>Our Work</Link>
          </li>
          
          <li><button onClick={submitLogout}>Log Out</button></li>
        </ul>
        <div className="icon" onClick={toggleMenu}>
          <FaBars></FaBars>
        </div>
      </nav>

      <Routes>
        <Route path='/our-work' element={<OurWork />}/>
      </Routes>
      </Router>
      </div>
  );
}