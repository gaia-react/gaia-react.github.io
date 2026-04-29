import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import GetStartedApp from './GetStartedApp';
import './styles.css';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <GetStartedApp />
  </StrictMode>
);
