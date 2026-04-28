import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import AboutApp from './AboutApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutApp />
  </StrictMode>,
);
