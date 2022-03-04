import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  id: 'GTM-W8D8DVL',
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <Layout className='relative z-50'>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
