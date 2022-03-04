import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';

import Router from 'next/router';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as ga from '../lib/gtm';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Layout className='relative z-50'>
        <Component {...pageProps} key={route} />
      </Layout>
    </>
  );
}

export default MyApp;
