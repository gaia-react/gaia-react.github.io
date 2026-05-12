import {lazy, Suspense} from 'react';
import Closing from '@/components/Closing';
import {Layout} from '@/components/Layout';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import AgenticDesignDetail from './sections/AgenticDesignDetail';
import Forensics from './sections/Forensics';
import GaiaCi from './sections/GaiaCi';
import Hero from './sections/Hero';
import LoadOnDemand from './sections/LoadOnDemand';
import ObsidianWikiDetail from './sections/ObsidianWikiDetail';
import Pillar from './sections/Pillar';
import TokenEconomics from './sections/TokenEconomics';
import Trust from './sections/Trust';
import UpdateDeps from './sections/UpdateDeps';

// Stack renders 15 brand-logo SVG components (~130 KB, most of it the two
// largest). Split it into its own chunk and kick the fetch off eagerly so it
// resolves before the user scrolls to it — and before hydration, so there is
// no reveal-then-hide flash on the prerendered markup.
const stackChunk = import('./sections/Stack');
const Stack = lazy(async () => stackChunk);

const App = () => {
  useScrollToHash();
  useScrollReveal();

  return (
    <Layout>
      <Hero />
      <Trust />
      <LoadOnDemand />
      <TokenEconomics />
      <AgenticDesignDetail />
      <Pillar />
      <ObsidianWikiDetail />
      <GaiaCi />
      <UpdateDeps />
      <Forensics />
      <Suspense fallback={null}>
        <Stack />
      </Suspense>
      <Closing secondaryHref="/about/" secondaryLabel="About the Author →" />
    </Layout>
  );
};

export default App;
