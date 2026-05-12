import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import AgenticDesign from './sections/AgenticDesign';
import ClaudeMd from './sections/ClaudeMd';
import Hero from './sections/Hero';
import ObsidianWiki from './sections/ObsidianWiki';
import Why from './sections/Why';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Hero />
      <Why />
      <ClaudeMd />
      <AgenticDesign />
      <ObsidianWiki />
      <Closing secondaryHref="/why/" secondaryLabel="Why GAIA →" />
    </Layout>
  );
};

export default App;
