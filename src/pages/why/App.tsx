import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import TheCase from './sections/TheCase';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <TheCase />
    </Layout>
  );
};

export default App;
