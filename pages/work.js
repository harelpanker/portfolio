import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import CTA from '../components/layout/CTA';
import WorkList from '../components/work/WorlList';

const Work = () => {
  return (
    <>
      <Head>
        <title>Harel Panker | Work</title>
      </Head>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='w-full h-full text-gray-50 text-lg py-32 mb-10 transition-all duration-500'>
          <header className='px-12 flex flex-col justify-center text-center mb-20 md:mb-36'>
            <div className='container max-w-7xl overflow-hidden'>
              <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600 text-7xl md:text-8xl font-bold'>
                Recent Work
              </h1>
            </div>
          </header>
          <section>
            <WorkList number={15} />
          </section>
          <CTA />
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Work;
