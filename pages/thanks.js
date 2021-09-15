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
          className='w-full overflow-hidden h-full flex flex-col items-center justify-center text-center text-gray-50 text-lg py-32'>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600 text-8xl font-bold'>
            Thank You!
          </h1>
          <p>I'll contact you promptly.</p>
          <Button
            href='/'
            className='mt-10 rounded py-4 px-10 text-gray-50 bg-transparent font-medium text-2xl border border-gray-50 transition duration-500 hover:bg-gray-50 hover:text-gray-900'>
            Back home
          </Button>
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default thanks;
