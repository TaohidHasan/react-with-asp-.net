import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import {Home} from './components/Home';
import {Dash} from './components/Dash';
import {Event} from './components/Event';

import {Inventory} from './components/Inventory';

import {Navigation} from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
    

        <hr />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dash" element={<Dash />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Event" element={<Event />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
