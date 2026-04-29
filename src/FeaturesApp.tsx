import {useEffect} from 'react';
import {Layout} from './components/Layout';
import Closing from './sections/Closing';
import AgenticDesignDetail from './sections/features/AgenticDesignDetail';
import ClaudeMdDetail from './sections/features/ClaudeMdDetail';
import ObsidianWikiDetail from './sections/features/ObsidianWikiDetail';
import Stack from './sections/features/Stack';
import TokenEconomics from './sections/features/TokenEconomics';
import Trust from './sections/features/Trust';

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
