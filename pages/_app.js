import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout className='relative z-50'>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
