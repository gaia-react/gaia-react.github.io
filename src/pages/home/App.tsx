import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Gate from './sections/Gate';
import Hero from './sections/Hero';
import Opinionated from './sections/Opinionated';
import TokenEfficiency from './sections/TokenEfficiency';
import Why from './sections/Why';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Hero />
      <Gate />
      <Why />
      <Opinionated />
      <TokenEfficiency />
      <Closing secondaryHref="/why/" secondaryLabel="Why GAIA →" />
    </Layout>
  );
};

export default App;
