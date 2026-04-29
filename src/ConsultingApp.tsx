import {useEffect} from 'react';
import {Layout} from './components/Layout';
import Consulting from './sections/consulting/Consulting';

const ConsultingApp = () => {
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
      <Consulting />
    </Layout>
  );
};

export default ConsultingApp;
