// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import $ from 'jquery';

// Declare global types to extend the Window object
declare global {
  interface Window {
    $: typeof $;
    jQuery: typeof $;
  }
}

// Make jQuery globally available
window.$ = window.jQuery = $;

// Render the React app
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
