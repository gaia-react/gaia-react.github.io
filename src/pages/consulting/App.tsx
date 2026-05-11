import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Consulting from './sections/Consulting';

const App = () => {
  useScrollReveal();
  useScrollToHash();

  return (
    <Layout>
      <Consulting />
    </Layout>
  );
};

export default App;
