import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Roadmap from './sections/Roadmap';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Roadmap />
    </Layout>
  );
};

export default App;
