import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Welcome, Setup, Plan, Congratulations } from './Pages';
import { Header, Navbar }  from './components';

function App() {
  return (
    <div className="App">
        <Header />
        <Navbar />
          <Routes>
            <Route exact path='/*' element={<Welcome />} />
            <Route exact path='/setup' element={<Setup />} />
            <Route exact path='/plan' element={<Plan />} />
            <Route exact path='/congratulations' element={<Congratulations />} />
          </Routes>
    </div>
  );
}

export default App;
