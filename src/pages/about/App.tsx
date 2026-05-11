import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import About from './sections/About';

const App = () => {
  useScrollReveal();
  useScrollToHash();

  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default App;
