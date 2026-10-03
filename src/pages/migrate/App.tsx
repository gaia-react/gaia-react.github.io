import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Migrate from './sections/Migrate';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Migrate />
    </Layout>
  );
};

export default App;
