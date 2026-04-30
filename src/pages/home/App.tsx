import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import AgenticDesign from './sections/AgenticDesign';
import ClaudeMd from './sections/ClaudeMd';
import FrameworkComparison from './sections/FrameworkComparison';
import Hero from './sections/Hero';
import ObsidianWiki from './sections/ObsidianWiki';
import Why from './sections/Why';

const App = () => {
  useScrollToHash();

  return (
    <Layout>
      <Hero />
      <Why />
      <FrameworkComparison />
      <AgenticDesign />
      <ObsidianWiki />
      <ClaudeMd />
      <Closing />
    </Layout>
  );
};

export default App;
