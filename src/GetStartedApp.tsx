import { useEffect } from 'react';
import { Layout } from './components/Layout';
import GetStarted from './sections/GetStarted';

export default function GetStartedApp() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <Layout>
      <GetStarted />
    </Layout>
  );
}
