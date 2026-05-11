import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import AgenticDesignDetail from './sections/AgenticDesignDetail';
import Closing from './sections/Closing';
import Forensics from './sections/Forensics';
import GaiaCi from './sections/GaiaCi';
import Hero from './sections/Hero';
import LoadOnDemand from './sections/LoadOnDemand';
import ObsidianWikiDetail from './sections/ObsidianWikiDetail';
import Pillar from './sections/Pillar';
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
      <LoadOnDemand />
      <TokenEconomics />
      <AgenticDesignDetail />
      <Pillar />
      <ObsidianWikiDetail />
      <GaiaCi />
      <UpdateDeps />
      <Forensics />
      <Stack />
      <Closing />
    </Layout>
  );
};

export default App;
