import React from 'react';
import Home from './pages/Home';
import './App.css'; // Your global styles
import 'bootstrap/dist/css/bootstrap.min.css';



const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
