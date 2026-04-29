import { useEffect } from 'react';
import { Layout } from './components/Layout';
import Commands from './sections/Commands';
import Rules from './sections/Rules';
import Agents from './sections/Agents';
import Skills from './sections/Skills';
import Hooks from './sections/Hooks';
import Statusline from './sections/Statusline';
import GitHub from './sections/GitHub';

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
      <Commands />
      <Rules />
      <Agents />
      <Skills />
      <Hooks />
      <Statusline />
      <GitHub />
    </Layout>
  );
}
