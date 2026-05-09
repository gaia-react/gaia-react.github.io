import {Layout} from '@/components/Layout';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import AgenticDesignDetail from './sections/AgenticDesignDetail';
import ClaudeMdDetail from './sections/ClaudeMdDetail';
import Forensics from './sections/Forensics';
import GaiaCi from './sections/GaiaCi';
import ObsidianWikiDetail from './sections/ObsidianWikiDetail';
import Sharpen from './sections/Sharpen';
import Stack from './sections/Stack';
import TokenEconomics from './sections/TokenEconomics';
import Trust from './sections/Trust';
import WikiManagement from './sections/WikiManagement';

const App = () => {
  useScrollToHash();

  return (
    <Layout>
      <Trust />
      <TokenEconomics />
      <AgenticDesignDetail />
      <ObsidianWikiDetail />
      <WikiManagement />
      <GaiaCi />
      <Sharpen />
      <ClaudeMdDetail />
      <Forensics />
      <Stack />
    </Layout>
  );
};

export default App;
