import React from 'react';

const Form: React.FC = () => {
  return (
    <div style={{ 
      textAlign: "center", 
      backgroundColor: "rgb(236, 232, 232)",  // Light blue background
      padding: "20px", 
      minHeight: "100vh" 
    }}>
      {/* <h2 style={{fontFamily:'raleway', letterSpacing:'2px'}}>New Patient Appointment</h2> */}
      <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSdcic3nS2-pk8BVZEkKj-f6hvLn7_cTiwedqDYMFqgh2ltneg/viewform?embedded=true"
    width="100%" // Makes the iframe take up full width
    height="100%" // Makes the iframe take up full height relative to its parent
    // frameBorder="0"
    // marginHeight="0"
    // marginWidth="0"
    title="New Patient Appointment Form"
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
    }}
  >
        Loading…
      </iframe>
    </div>
  );
};

export default Form;
