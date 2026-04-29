import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import FeaturesApp from './FeaturesApp';
import './styles.css';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <FeaturesApp />
  </StrictMode>
);
