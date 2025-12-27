
import React from 'react';
import ReactDOM from 'react-dom/client';
import { injectSpeedInsights } from '@vercel/speed-insights';
import App from './App';
import './style.css';

// Inject Vercel Speed Insights for performance monitoring
injectSpeedInsights();

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
