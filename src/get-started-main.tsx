import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import GetStartedApp from './GetStartedApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GetStartedApp />
  </StrictMode>,
);
