import { Layout } from './components/Layout';
import Hero from './sections/Hero';
import Why from './sections/Why';
import Stack from './sections/Stack';
import ObsidianWiki from './sections/ObsidianWiki';
import ClaudeMd from './sections/ClaudeMd';
import QuickStart from './sections/QuickStart';
import Commands from './sections/Commands';
import Rules from './sections/Rules';
import Agents from './sections/Agents';
import Hooks from './sections/Hooks';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Why />
      <Stack />
      <ObsidianWiki />
      <ClaudeMd />
      <QuickStart />
      <Commands />
      <Rules />
      <Agents />
      <Hooks />
    </Layout>
  );
}
