import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import ConsultingApp from './ConsultingApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConsultingApp />
  </StrictMode>,
);
