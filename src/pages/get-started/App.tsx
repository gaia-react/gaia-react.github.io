import {useEffect} from 'react';
import {Layout} from '@/components/Layout';
import GetStarted from './sections/GetStarted';

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
      <GetStarted />
    </Layout>
  );
};

export default App;
