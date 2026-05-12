import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Diagnosis from './sections/Diagnosis';
import Discipline from './sections/Discipline';
import Hero from './sections/Hero';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Hero />
      <Diagnosis />
      <Discipline />
      <Closing secondaryHref="/features/" secondaryLabel="See the Features →" />
    </Layout>
  );
};

export default App;
