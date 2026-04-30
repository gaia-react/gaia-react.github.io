import {Layout} from '@/components/Layout';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import About from './sections/About';

const App = () => {
  useScrollToHash();

  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default App;
