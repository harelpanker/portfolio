import { Button } from '../styles/styles.js';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const thanks = () => {
  return (
    <>
      <Head>
        <title>Harel Panker | Thank You</title>
      </Head>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='w-full overflow-hidden h-full flex flex-col items-center justify-center text-center dark:text-gray-50 text-gray-700 text-lg py-32 transition-all duration-500'>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600 text-8xl font-bold'>
            Thank You!
          </h1>
          <p>I'll contact you promptly.</p>
          <Button
            href='/'
            className='mt-10 rounded py-4 px-10 dark:text-gray-50 text-gray-700 bg-transparent font-medium text-2xl border dark:border-gray-50 border-gray-800 transition duration-500 dark:hover:bg-gray-50 hover:bg-gray-900 dark:hover:text-gray-900 hover:text-gray-50'>
            Back home
          </Button>
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default thanks;
