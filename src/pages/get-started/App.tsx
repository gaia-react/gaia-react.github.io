import {Layout} from '@/components/Layout';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import GetStarted from './sections/GetStarted';

const App = () => {
  useScrollToHash();

  return (
    <Layout>
      <GetStarted />
    </Layout>
  );
};

export default App;
