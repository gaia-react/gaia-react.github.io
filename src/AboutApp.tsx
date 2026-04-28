import { useEffect } from 'react';
import { Layout } from './components/Layout';
import About from './sections/About';

export default function AboutApp() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <Layout>
      <About />
    </Layout>
  );
}
