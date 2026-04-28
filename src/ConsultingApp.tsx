import { useEffect } from 'react';
import { Layout } from './components/Layout';
import Consulting from './sections/Consulting';

export default function ConsultingApp() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <Layout>
      <Consulting />
    </Layout>
  );
}
