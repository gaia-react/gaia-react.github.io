import {Layout} from '@/components/Layout';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Roadmap from './sections/Roadmap';

const App = () => {
  useScrollToHash();

  return (
    <Layout>
      <Roadmap />
    </Layout>
  );
};

export default App;
