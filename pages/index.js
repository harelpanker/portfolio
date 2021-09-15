import Head from 'next/head';
import { SpanText } from '../styles/styles.js';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='w-full h-screen bg-gray-900 flex'>
        <div className='relative w-full'>
          <header className='text-transparent h-full w-full flex items-center justify-center'>
            <div className='container'>
              <h1 className='text-gray-50 lg:text-8xl leading-none font-extrabold flex flex-col gap-8 text-center uppercase md:text-7xl text-4xl'>
                <motion.span
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 1 }}
                  variants={variants}>
                  <SpanText backgroundImg='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
                    Strategy.
                  </SpanText>
                </motion.span>
                <motion.span
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 1, delay: 1 }}
                  variants={variants}>
                  <SpanText backgroundImg='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
                    Development.
                  </SpanText>
                </motion.span>
                <motion.span
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 1, delay: 2 }}
                  variants={variants}>
                  <SpanText backgroundImg='bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-500'>
                    Success.
                  </SpanText>
                </motion.span>
              </h1>
            </div>
          </header>
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
