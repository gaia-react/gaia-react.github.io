import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Hero from './sections/Hero';
import Opinionated from './sections/Opinionated';
import TokenEfficiency from './sections/TokenEfficiency';
import Trust from './sections/Trust';

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Hero />
      <Trust />
      <Opinionated />
      <TokenEfficiency />
      <Closing secondaryHref="/why/" secondaryLabel="Why GAIA →" />
    </Layout>
  );
};

export default App;
