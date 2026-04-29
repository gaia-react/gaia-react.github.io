import {useEffect} from 'react';
import {Layout} from './components/Layout';
import Agents from './sections/docs/Agents';
import Commands from './sections/docs/Commands';
import GitHub from './sections/docs/GitHub';
import Hooks from './sections/docs/Hooks';
import Rules from './sections/docs/Rules';
import Skills from './sections/docs/Skills';
import Statusline from './sections/docs/Statusline';

const DocsApp = () => {
  useEffect(() => {
    const {hash} = window.location;

    if (hash) {
      const element = document.querySelector(hash);
      if (element)
        element.scrollIntoView({behavior: 'instant' as ScrollBehavior});
    }
  }, []);

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

export default DocsApp;
