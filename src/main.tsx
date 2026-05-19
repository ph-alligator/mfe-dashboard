import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import '@org/ui/styles.css';
import App from './App';

/** Standalone dev — run without shell on :5001 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <div className="min-h-screen p-4">
        <p className="mb-4 text-sm text-muted-foreground">
          Standalone mode — also exposed as <code>dashboard/App</code>
        </p>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
