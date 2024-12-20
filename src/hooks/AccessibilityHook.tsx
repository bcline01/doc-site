import { useEffect } from 'react';

const useAccessibility = () => {
  useEffect(() => {
    const button = document.getElementById('accessibility-button');
    const panel = document.getElementById('accessibility-panel');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const highContrastBtn = document.getElementById('high-contrast');
    const resetBtn = document.getElementById('reset-accessibility');

    const togglePanel = () => {
      panel?.classList.toggle('active');
    };

    const increaseFont = () => {
      document.body.style.fontSize = '1.2rem';
    };

    const decreaseFont = () => {
      document.body.style.fontSize = '0.9rem';
    };

    const toggleHighContrast = () => {
      document.body.classList.toggle('high-contrast');
    };

    const resetAccessibility = () => {
      document.body.style.fontSize = '';
      document.body.classList.remove('high-contrast');
    };

    // Add event listeners
    button?.addEventListener('click', togglePanel);
    increaseFontBtn?.addEventListener('click', increaseFont);
    decreaseFontBtn?.addEventListener('click', decreaseFont);
    highContrastBtn?.addEventListener('click', toggleHighContrast);
    resetBtn?.addEventListener('click', resetAccessibility);

    // Cleanup event listeners on component unmount
    return () => {
      button?.removeEventListener('click', togglePanel);
      increaseFontBtn?.removeEventListener('click', increaseFont);
      decreaseFontBtn?.removeEventListener('click', decreaseFont);
      highContrastBtn?.removeEventListener('click', toggleHighContrast);
      resetBtn?.removeEventListener('click', resetAccessibility);
    };
  }, []);
};

export default useAccessibility;
