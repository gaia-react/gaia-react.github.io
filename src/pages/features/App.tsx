import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import AgenticDesignDetail from './sections/AgenticDesignDetail';
import ClaudeMdDetail from './sections/ClaudeMdDetail';
import ObsidianWikiDetail from './sections/ObsidianWikiDetail';
import Stack from './sections/Stack';
import TokenEconomics from './sections/TokenEconomics';
import Trust from './sections/Trust';

const App = () => {
  useScrollToHash();

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

export default App;
