import { useEffect } from 'react';
import { Layout } from './components/Layout';
import Hero from './sections/Hero';
import Why from './sections/Why';
import AgenticDesign from './sections/AgenticDesign';
import Stack from './sections/Stack';
import ObsidianWiki from './sections/ObsidianWiki';
import ClaudeMd from './sections/ClaudeMd';
import Closing from './sections/Closing';

export default function App() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <Why />
      <AgenticDesign />
      <Stack />
      <ObsidianWiki />
      <ClaudeMd />
      <Closing />
    </Layout>
  );
}
