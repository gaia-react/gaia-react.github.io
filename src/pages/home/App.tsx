import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import AgenticDesign from './sections/AgenticDesign';
import ClaudeMd from './sections/ClaudeMd';
import TheStack from './sections/TheStack.tsx';
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
      <AgenticDesign />
      <ObsidianWiki />
      <ClaudeMd />
      <TheStack />
      <Closing />
    </Layout>
  );
};

export default App;
