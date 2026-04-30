import {Layout} from '@/components/Layout';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Consulting from './sections/Consulting';

const App = () => {
  useScrollToHash();

  return (
    <Layout>
      <Consulting />
    </Layout>
  );
};

export default App;
