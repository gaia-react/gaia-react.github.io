import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import AgenticDesignDetail from './sections/AgenticDesignDetail';
import ClaudeMdDetail from './sections/ClaudeMdDetail';
import Closing from './sections/Closing';
import Forensics from './sections/Forensics';
import GaiaCi from './sections/GaiaCi';
import Hero from './sections/Hero';
import ObsidianWikiDetail from './sections/ObsidianWikiDetail';
import Stack from './sections/Stack';
import TokenEconomics from './sections/TokenEconomics';
import Trust from './sections/Trust';
import UpdateDeps from './sections/UpdateDeps';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Hero />
      <Trust />
      <TokenEconomics />
      <AgenticDesignDetail />
      <ObsidianWikiDetail />
      <GaiaCi />
      <UpdateDeps />
      <ClaudeMdDetail />
      <Forensics />
      <Stack />
      <Closing />
    </Layout>
  );
};

export default App;
