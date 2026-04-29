import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AboutApp from './AboutApp';
import './styles.css';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <AboutApp />
  </StrictMode>
);
