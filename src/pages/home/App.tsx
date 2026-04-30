import {useEffect} from 'react';
import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import AgenticDesign from './sections/AgenticDesign';
import ClaudeMd from './sections/ClaudeMd';
import FrameworkComparison from './sections/FrameworkComparison';
import Hero from './sections/Hero';
import ObsidianWiki from './sections/ObsidianWiki';
import Why from './sections/Why';

const App = () => {
  useEffect(() => {
    const {hash} = window.location;

    if (hash) {
      const element = document.querySelector(hash);
      if (element)
        element.scrollIntoView({behavior: 'instant' as ScrollBehavior});
    }
  }, []);

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
