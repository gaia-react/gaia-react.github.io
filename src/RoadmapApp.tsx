import { useEffect } from 'react';
import { Layout } from './components/Layout';
import Roadmap from './sections/Roadmap';

export default function RoadmapApp() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <Layout>
      <Roadmap />
    </Layout>
  );
}
