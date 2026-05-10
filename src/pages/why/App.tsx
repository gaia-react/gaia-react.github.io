import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Boundaries from './sections/Boundaries';
import Closing from './sections/Closing';
import Diagnosis from './sections/Diagnosis';
import Discipline from './sections/Discipline';
import Hero from './sections/Hero';
import Outcomes from './sections/Outcomes';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Hero />
      <Diagnosis />
      <Discipline />
      <Outcomes />
      <Boundaries />
      <Closing />
    </Layout>
  );
};

export default App;
