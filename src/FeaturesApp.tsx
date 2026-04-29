import {useEffect} from 'react';
import {Layout} from './components/Layout';
import AgenticDesignDetail from './sections/AgenticDesignDetail';
import ClaudeMdDetail from './sections/ClaudeMdDetail';
import Closing from './sections/Closing';
import ObsidianWikiDetail from './sections/ObsidianWikiDetail';
import Stack from './sections/Stack';
import TokenEconomics from './sections/TokenEconomics';
import Trust from './sections/Trust';

const FeaturesApp = () => {
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
      <Trust />
      <TokenEconomics />
      <AgenticDesignDetail />
      <ObsidianWikiDetail />
      <ClaudeMdDetail />
      <Stack />
      <Closing />
    </Layout>
  );
};

export default FeaturesApp;
