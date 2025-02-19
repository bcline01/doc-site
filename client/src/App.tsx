import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Chiropractic from './pages/Chiropractic';
import Home from './pages/Home';
import $ from 'jquery'; // Correct way to import jQuery
import './App.css'; // Your global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Laser from './pages/Laser';
import Massage from './pages/Massage';
import Spinal from './pages/Spinal';
import Shockwave from './pages/Shockwave';
import Orthotics from './pages/Orthotics';
import Exercise from './pages/Exercise';
import FunctionalMedicine from './pages/FunctionalMedicine';
import Form from './pages/Form';
import CarAccidentRecovery from './pages/Car-Accident';
import AuthForm from './pages/AuthForm';
import PatientPortal from './pages/PatientPortal';

const App: React.FC = () => {

  useEffect(() => {
    // Use jQuery logic here if necessary
    $(document).ready(() => {
      console.log('jQuery is working!');
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/chiropractic" element={<Chiropractic />} />
          <Route path="/laser" element={<Laser />} />
          <Route path="/massage" element={<Massage />} />
          <Route path="/spinal" element={<Spinal />} />
          <Route path="/shockwave" element={<Shockwave />} />
          <Route path="/orthotics" element={<Orthotics />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/functional" element={<FunctionalMedicine />} />
          <Route path="/appointment" element={<Form />} />
          <Route path="/auth-form" element={<AuthForm />} />
          <Route path="/car-accident-recovery" element={<CarAccidentRecovery />} />
          <Route path="/patient-portal" element={<PatientPortal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
