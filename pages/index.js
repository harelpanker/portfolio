import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Haeder from '../components/home/Haeder.js';
import About from '../components/home/About.js';
import Recommendations from '../components/home/Recommendations.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Harel Panker | Front End Web Developer</title>
      </Head>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='w-full min-h-screen dark:bg-gray-900 bg-gray-50 flex flex-col transition-all duration-500 relative'>
          <Haeder />
          <About />
          <Recommendations />
        </motion.main>
      </AnimatePresence>
    </>
  );
}
