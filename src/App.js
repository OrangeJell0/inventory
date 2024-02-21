// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statement
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Home />} /> {/* Use 'element' prop instead of 'component' */}
        <Route path="/about" element={<About />} /> {/* Use 'element' prop instead of 'component' */}
        <Route path="/contact" element={<Contact />} /> {/* Use 'element' prop instead of 'component' */}
      </Routes> {/* Replace Switch with Routes */}
    </Router>
  );
}

export default App;
