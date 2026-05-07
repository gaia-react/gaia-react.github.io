import {Layout} from '@/components/Layout';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Mentorship from './sections/Mentorship';

const App = () => {
  useScrollToHash();

  return (
    <Layout>
      <Mentorship />
    </Layout>
  );
};

export default App;
