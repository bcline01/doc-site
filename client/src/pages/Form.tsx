import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Form: React.FC = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  
  return (
    
    <div>
      
    <div>
      <Navbar />
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'rgb(236, 232, 232)', // Light blue background
          padding: '20px',
          minHeight: '100vh',
          marginTop: '80px', // Push content below navbar
          position: 'relative', // Allow iframe positioning to be relative to this container
        }}
      >
        {/* <h2 style={{fontFamily:'raleway', letterSpacing:'2px'}}>New Patient Appointment</h2> */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdcic3nS2-pk8BVZEkKj-f6hvLn7_cTiwedqDYMFqgh2ltneg/viewform?embedded=true"
          width="100%" // Makes the iframe take up full width
          height="100%" // Makes the iframe take up full height relative to its parent
          style={{
            position: 'absolute',
            top: '0', // position relative to the container
            left: '0',
            bottom: '0',
            right: '0',
          }}
          title="New Patient Appointment Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
    </div>
  );
};

export default Form;
