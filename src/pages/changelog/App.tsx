import {Layout} from '@/components/Layout';
import {useRevealOnLoad} from '@/hooks/useRevealOnLoad';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Changelog from './sections/Changelog';

const App = () => {
  useScrollToHash();
  useRevealOnLoad();

  return (
    <Layout>
      <Changelog />
    </Layout>
  );
};

export default App;
