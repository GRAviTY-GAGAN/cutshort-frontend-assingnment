import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Setup from './Pages/Setup';
import Congratulations from './Pages/Congratulations';
import Plan from './Pages/Plan';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/*' element={<Welcome />} />
          <Route path='/setup' element={<Setup />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/congratulations' element={<Congratulations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
