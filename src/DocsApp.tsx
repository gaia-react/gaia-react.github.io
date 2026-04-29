import {useEffect} from 'react';
import {Layout} from './components/Layout';
import Agents from './sections/Agents';
import Commands from './sections/Commands';
import GitHub from './sections/GitHub';
import Hooks from './sections/Hooks';
import Rules from './sections/Rules';
import Skills from './sections/Skills';
import Statusline from './sections/Statusline';

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
