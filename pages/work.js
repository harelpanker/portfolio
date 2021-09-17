import projectsData from '../public/data/projects';
import WorkInfo from '../components/work/WorkInfo';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

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
            <div className='container'>
              <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600 text-7xl md:text-8xl font-bold'>
                Recent Work
              </h1>
            </div>
          </header>
          <section>
            <div className='container'>
              <ul>
                {projectsData.map((project) => (
                  <li
                    key={project.id}
                    className='w-full flex h-52 sm:h-80 md:h-h-40 lg:h-h-50 xl:h-h-76 mb-12 md:mb-20 last:mb-0'>
                    <WorkInfo project={project} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Work;
