import React, { useEffect } from 'react';
import Home from './pages/Home';
import $ from 'jquery'; // Correct way to import jQuery
import './App.css'; // Your global styles
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  useEffect(() => {
    // Use jQuery logic here if necessary
    $(document).ready(() => {
      console.log('jQuery is working!');
    });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
