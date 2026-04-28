import { useEffect } from 'react';
import { Layout } from './components/Layout';
import QuickStart from './sections/QuickStart';
import Commands from './sections/Commands';
import Rules from './sections/Rules';
import Agents from './sections/Agents';
import Skills from './sections/Skills';
import Hooks from './sections/Hooks';
import Statusline from './sections/Statusline';

export default function DocsApp() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <Layout>
      <QuickStart />
      <Commands />
      <Rules />
      <Agents />
      <Skills />
      <Hooks />
      <Statusline />
    </Layout>
  );
}
