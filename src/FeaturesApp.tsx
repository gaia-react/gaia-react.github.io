import { useEffect } from 'react';
import { Layout } from './components/Layout';
import Trust from './sections/Trust';
import TokenEconomics from './sections/TokenEconomics';
import AgenticDesignDetail from './sections/AgenticDesignDetail';
import ObsidianWikiDetail from './sections/ObsidianWikiDetail';
import ClaudeMdDetail from './sections/ClaudeMdDetail';
import Stack from './sections/Stack';
import Closing from './sections/Closing';

export default function FeaturesApp() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <Layout>
      <Trust />
      <TokenEconomics />
      <AgenticDesignDetail />
      <ObsidianWikiDetail />
      <ClaudeMdDetail />
      <Stack />
      <Closing />
    </Layout>
  );
}
