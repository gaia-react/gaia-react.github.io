import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import RoadmapApp from './RoadmapApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoadmapApp />
  </StrictMode>,
);
