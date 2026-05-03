import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Sponsors from './sections/Sponsors';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Sponsors />
    </Layout>
  );
};

export default App;
