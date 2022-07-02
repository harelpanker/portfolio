import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import CTA from '../components/layout/CTA.js';

const services = () => {
  return (
    <>
      <Head>
        <title>Harel Panker | Services</title>
      </Head>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='w-full h-full flex flex-col dark:text-gray-50 text-gray-900 text-lg py-32 overflow-hidden transition-all duration-500'>
          <div className='container text-center grid grid-cols-1 gap-12'>
            <header>
              <div className='container flex flex-col items-center'>
                <h1 className='bg-clip-text mb-4 text-transparent bg-gradient-to-r from-green-600 to-purple-600 text-7xl md:text-8xl font-bold'>
                  My Services
                </h1>
                <p className='text-base md:text-xl max-w-md'>
                  All of my services are around Webflow. All of my work is with
                  the best practice in mind.
                </p>
              </div>
            </header>
            <section className='mt-12 md:mt-24 text-center'>
              <div className='container'>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                  <li>
                    <Image
                      className='filter invert dark:invert-0'
                      src='/icons/work.svg'
                      alt='My first service is maintannce for companyes'
                      width={120}
                      height={120}
                    />
                    <h2 className='mt-6 mb-3 text-3xl font-bold'>
                      Maintenance
                    </h2>
                    <p className='opacity-80'>
                      Service on an hourly basis{' '}
                      <span className='text-xs'>min 10 houres per month</span>,
                      mainly for companies that want repairs, maintenance, site
                      construction, landing pages, adding content etc.
                    </p>
                  </li>
                  <li>
                    <Image
                      className='filter invert dark:invert-0'
                      src='/icons/design.svg'
                      alt='My second service is converting design'
                      width={120}
                      height={120}
                    />
                    <h2 className='mt-6 mb-3 text-3xl font-bold'>Convertion</h2>
                    <p className='opacity-80'>
                      I'll convert your design into a website. No metter if it's
                      from Figma, XD or Sketch.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
            <CTA />
          </div>
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default services;
