import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import AgenticDesign from './sections/AgenticDesign';
import Determinism from './sections/Determinism';
import Focus from './sections/Focus';
import Hero from './sections/Hero';
import Performance from './sections/Performance';
import Why from './sections/Why';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Hero />
      <Why />
      <Determinism />
      <AgenticDesign />
      <Focus />
      <Performance />
      <Closing secondaryHref="/why/" secondaryLabel="Why GAIA →" />
    </Layout>
  );
};

export default App;
