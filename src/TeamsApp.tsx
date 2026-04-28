import { useEffect } from 'react';
import { Layout } from './components/Layout';
import Teams from './sections/Teams';

export default function TeamsApp() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <Layout>
      <Teams />
    </Layout>
  );
}
