import React, { useState } from 'react';
import '../styles/Accessibility.css';
import useAccessibility from '../hooks/AccessibilityHook';
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import { IoContrast } from "react-icons/io5";
import { RiResetLeftLine } from "react-icons/ri";





const AccessibilityToolbar: React.FC = () => {
    useAccessibility(); // Call the custom hook

    const setFontSize = useState('1rem')[1]; // Default font size
  const setHighContrast = useState(false)[1]; // High contrast mode state

  const increaseFont = () => {
    setFontSize((prevFontSize) => {
      const newFontSize = parseFloat(prevFontSize) * 1.2; // Increase font size by 20%
      document.documentElement.style.setProperty('--font-size', `${newFontSize}rem`); // Update CSS variable
      return `${newFontSize}rem`; // Update state
    });
  };

  const decreaseFont = () => {
    setFontSize((prevFontSize) => {
      const newFontSize = parseFloat(prevFontSize) / 1.2; // Decrease font size by 20%
      document.documentElement.style.setProperty('--font-size', `${newFontSize}rem`); // Update CSS variable
      return `${newFontSize}rem`; // Update state
    });
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => {
      document.body.classList.toggle('high-contrast', !prev); // Toggle high contrast mode
      return !prev;
    });
  };

  const resetAccessibility = () => {
    document.documentElement.style.setProperty('--font-size', '1rem'); // Reset font size to default
    setFontSize('1rem'); // Update state to reflect default font size
    document.body.classList.remove('high-contrast'); // Remove high contrast mode
    setHighContrast(false); // Update state to reflect no high contrast
  };

    return (
        <div className="accessibility-toolbar">
        <button id="accessibility-button" aria-label="Accessibility Options">
          ♿
        </button>
        <div className="accessibility-panel" id="accessibility-panel">
          <h3>Accessibility Options</h3>
          <button id="increase-font" onClick={increaseFont}><span style={{marginRight:'5px'}}><FaSearchPlus /></span>Increase Font Size</button>
          <button id="decrease-font" onClick={decreaseFont}><span style={{marginRight:'5px'}}><FaSearchMinus /></span>Decrease Font Size</button>
          <button id="high-contrast" onClick={toggleHighContrast}><span style={{marginRight:'5px'}}><IoContrast /></span>High Contrast Mode</button>
          <button id="reset-accessibility" onClick={resetAccessibility}><span style={{marginRight:'5px'}}><RiResetLeftLine /></span>Reset</button>
        </div>
      </div>
    );
}
      

export default AccessibilityToolbar;
