import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Login  from './pages/Login/Login';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { MoreDetails } from './pages/MoreDetails/MoreDetails';
import { WarningModal } from './components/GlobalErrorModal/WarningModal';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/more-details/:id" element={<MoreDetails />} />
      </Routes>
      <WarningModal />
    </div>
  );
}

export default App;
