import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ConsultingApp from './ConsultingApp';
import './styles.css';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <ConsultingApp />
  </StrictMode>
);
