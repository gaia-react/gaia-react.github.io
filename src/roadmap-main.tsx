import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import RoadmapApp from './RoadmapApp';
import './styles.css';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <RoadmapApp />
  </StrictMode>
);
