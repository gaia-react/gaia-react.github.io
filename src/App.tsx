import { useEffect } from 'react';
import { Layout } from './components/Layout';
import Hero from './sections/Hero';
import Why from './sections/Why';
import AgenticDesign from './sections/AgenticDesign';
import Stack from './sections/Stack';
import ObsidianWiki from './sections/ObsidianWiki';
import ClaudeMd from './sections/ClaudeMd';
import QuickStart from './sections/QuickStart';
import Commands from './sections/Commands';
import Rules from './sections/Rules';
import Agents from './sections/Agents';
import Skills from './sections/Skills';
import Hooks from './sections/Hooks';

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
      <QuickStart />
      <Commands />
      <Rules />
      <Agents />
      <Skills />
      <Hooks />
    </Layout>
  );
}
