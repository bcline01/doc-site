import React, { useEffect, useState } from 'react';
import '../styles/Accessibility.css';
import useAccessibility from '../hooks/AccessibilityHook';
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import { IoContrast } from "react-icons/io5";
import { RiResetLeftLine } from "react-icons/ri";





const AccessibilityToolbar: React.FC = () => {
    useAccessibility(); // Call the custom hook
    const [fontSize, setFontSize] = useState(1.3); // Default font size of 1rem
    const [fontSizeH, setFontSizeH] = useState(2.3); // 
    const [fontSizeP, setFontSizeP] = useState(1.2); //
    const [fontSizeDoc, setFontSizeDoc] = useState(3.75); 
    const [fontSizeWelcome, setFontSizeWelcome] = useState(3.5); 
    const [fontSizeNav, setFontSizeNav] = useState(1); // Default font size of 1rem

    const setHighContrast = useState(false)[1]; // High contrast mode state


    // Function to increase font size
    const increaseFontSize = () => {
      setFontSize((prev) => prev + 0.1);  // Increase global font size
      setFontSizeH((prev) => prev + 0.1);  // Increase specific font size
      setFontSizeP((prev) => prev + 0.1);  // Increase specific font size
      setFontSizeDoc((prev) => prev + 0.1);  // Increase specific font size
      setFontSizeWelcome((prev) => prev + 0.1);  
      setFontSizeNav((prev) => prev + 0.1);  // Increase specific font size
    };
    
  
    // Function to decrease font size
    const decreaseFontSize = () => {
      setFontSize((prev) => prev - 0.1);  // Decrease font size by 0.1 rem
      setFontSizeH((prev) => prev - 0.1);  // Increase specific font size
      setFontSizeP((prev) => prev - 0.1);  // Increase specific font size
      setFontSizeDoc((prev) => prev - 0.1);  // Increase specific font size
      setFontSizeWelcome((prev) => prev - 0.1);  
      setFontSizeNav((prev) => prev - 0.1);  // Increase specific font size
    };
  
    // Function to reset font size to default
    const resetPage = () => {
      setFontSize(1.3); 
      setFontSizeH(2.3); 
      setFontSizeP(1.2);
      setFontSizeDoc(3.75);
      setFontSizeWelcome(5);
      setFontSizeNav(1);
      
      // Remove high contrast mode
      document.body.classList.remove('high-contrast');
      setHighContrast(false); // Update state to reflect the change
    };
    
  
 // Function to toggle high contrast mode
 const toggleHighContrast = () => {
  setHighContrast((prev) => {
    document.body.classList.toggle('high-contrast', !prev); // Toggle high contrast mode
    return !prev; // Update state
  });
};

  
    // Use `useEffect` to apply the font size to specific classes
    useEffect(() => {
      // Apply font size dynamically to specific elements
      const elements = document.querySelectorAll('.home-btn, .extra-button, .footer-nav-item, .footer a, .footer-btn, .learn-more-btn, .button');
      elements.forEach((element) => {
        (element as HTMLElement).style.fontSize = `${fontSize}rem`;  
      });
    }, [fontSize]); 

    useEffect(() => {
      // Apply font size dynamically to specific elements
      const elements = document.querySelectorAll('.vision-section h3');
      elements.forEach((element) => {
        (element as HTMLElement).style.fontSize = `${fontSizeH}rem`;  
      });
    }, [fontSizeH]); 

    useEffect(() => {
      // Apply font size dynamically to specific elements
      const elements = document.querySelectorAll('.vision-section p');
      elements.forEach((element) => {
        (element as HTMLElement).style.fontSize = `${fontSizeP}rem`;  
      });
    }, [fontSizeP]); 

    useEffect(() => {
      // Apply font size dynamically to specific elements
      const elements = document.querySelectorAll('.doc-page .meet-doctors-text');
      elements.forEach((element) => {
        (element as HTMLElement).style.fontSize = `${fontSizeDoc}rem`;  
      });
    }, [fontSizeDoc]); 
    useEffect(() => {
      const elements = document.querySelectorAll('.content');
      elements.forEach((element) => {
        (element as HTMLElement).style.fontSize = `${fontSizeWelcome}rem`;  
      });
    }, [fontSizeWelcome]); 
    useEffect(() => {
      // Apply font size dynamically to specific elements
      const elements = document.querySelectorAll('.nav-items a');
      elements.forEach((element) => {
        (element as HTMLElement).style.fontSize = `${fontSizeNav}rem`;  
      });
    }, [fontSizeNav]);

    

    return (
        <div className="accessibility-toolbar">
        <button id="accessibility-button" aria-label="Accessibility Options">
          ♿
        </button>
        <div className="accessibility-panel" id="accessibility-panel">
          <h3>Accessibility Options</h3>
          <button id="increase-font" onClick={increaseFontSize}><span style={{marginRight:'5px'}}><FaSearchPlus /></span>Increase Font Size</button>
          <button id="decrease-font" onClick={decreaseFontSize}><span style={{marginRight:'5px'}}><FaSearchMinus /></span>Decrease Font Size</button>
          <button id="high-contrast" onClick={toggleHighContrast}><span style={{marginRight:'5px'}}><IoContrast /></span>High Contrast Mode</button>
          <button id="reset-accessibility" onClick={resetPage}><span style={{marginRight:'5px'}}><RiResetLeftLine /></span>Reset</button>
        </div>
      </div>
    );
}
      

export default AccessibilityToolbar;
