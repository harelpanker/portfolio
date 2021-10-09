import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../styles/styles.js';

const Custom404 = () => {
  return (
    <>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='h-full min-h-screen flex items-center py-32 max-w-full transition-all duration-500'>
          <div className='container flex items-center justify-center flex-col'>
            <h1 className='text-6xl md:text-8xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
              404 - Page Not Found
            </h1>
            <Button
              href='/'
              className='mt-10 rounded py-4 px-10 dark:text-gray-50 text-gray-700 bg-transparent font-medium text-2xl border dark:border-gray-50 border-gray-800 transition duration-500 dark:hover:bg-gray-50 hover:bg-gray-900 dark:hover:text-gray-900 hover:text-gray-50'>
              Back home
            </Button>
          </div>
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Custom404;
