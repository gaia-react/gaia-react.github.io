import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Mentorship from './sections/Mentorship';

const App = () => {
  useScrollReveal();
  useScrollToHash();

  return (
    <Layout>
      <Mentorship />
    </Layout>
  );
};

export default App;
