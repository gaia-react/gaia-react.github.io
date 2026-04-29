import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import DocsApp from './DocsApp';
import './styles.css';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <DocsApp />
  </StrictMode>
);
