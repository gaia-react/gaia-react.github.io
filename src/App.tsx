import {useEffect} from 'react';
import {Layout} from './components/Layout';
import Closing from './sections/Closing';
import AgenticDesign from './sections/home/AgenticDesign';
import ClaudeMd from './sections/home/ClaudeMd';
import FrameworkComparison from './sections/home/FrameworkComparison';
import Hero from './sections/home/Hero';
import ObsidianWiki from './sections/home/ObsidianWiki';
import Why from './sections/home/Why';

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
