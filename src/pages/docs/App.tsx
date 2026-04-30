import {Layout} from '@/components/Layout';
import {useScrollToHash} from '@/hooks/useScrollToHash';
import Agents from './sections/Agents';
import Commands from './sections/Commands';
import GitHub from './sections/GitHub';
import Hooks from './sections/Hooks';
import Rules from './sections/Rules';
import Skills from './sections/Skills';
import Statusline from './sections/Statusline';

const App = () => {
  useScrollToHash();

  return (
    <Layout>
      <Commands />
      <Rules />
      <Agents />
      <Skills />
      <Hooks />
      <Statusline />
      <GitHub />
    </Layout>
  );
};

export default App;
