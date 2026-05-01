import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import GetStarted from './sections/GetStarted';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <GetStarted />
    </Layout>
  );
};

export default App;
