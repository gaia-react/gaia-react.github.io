import {useEffect} from 'react';
import {Layout} from './components/Layout';
import About from './sections/About';

const AboutApp = () => {
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
      <About />
    </Layout>
  );
};

export default AboutApp;
