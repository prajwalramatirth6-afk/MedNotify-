
import React from 'react';
import ReactDOM from 'react-dom/client';
import { injectSpeedInsights } from '@vercel/speed-insights';
import App from './App';
import './style.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  injectSpeedInsights();
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
