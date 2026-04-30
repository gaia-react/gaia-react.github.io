import {useEffect} from 'react';
import {Layout} from '@/components/Layout';
import Roadmap from './sections/Roadmap';

const App = () => {
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
      <Roadmap />
    </Layout>
  );
};

export default App;
