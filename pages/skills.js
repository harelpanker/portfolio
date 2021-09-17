import SkillList from '../components/skills/SkillList';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const skills = () => {
  return (
    <>
      <Head>
        <title>Harel Panker | Skill Set</title>
      </Head>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='w-full h-full flex flex-col dark:text-gray-50 text-gray-900 text-lg py-32 transition-all duration-500'>
          <div className='container text-center grid grid-cols-1 md:gap-8 lg:gap-12'>
            <header>
              <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600 text-6xl md:text-8xl font-bold'>
                Skill Set
              </h1>
            </header>
            <section className='mt-16 md:mt-24'>
              <div className='container'>
                <SkillList />
              </div>
            </section>
          </div>
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default skills;
