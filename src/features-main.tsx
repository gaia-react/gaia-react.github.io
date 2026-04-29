import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import FeaturesApp from './FeaturesApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeaturesApp />
  </StrictMode>,
);
