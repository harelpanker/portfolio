import { Button } from '../../styles/styles';

const CTA = () => {
  return (
    <section className='pt-12 pb-14 md:pt-36 md:pb-36 px-4 dark:text-gray-50 text-gray-900'>
      <div className='container text-center flex flex-col justify-center gap-10 max-w-7xl py-12 px-8 sm:p-12 rounded-xl overflow-hidden dark:bg-gray-800 bg-gray-100'>
        <header>
          <h2 className='text-center text-5xl md:text-8xl mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-red-500 to-pink-500'>
            Let's work together!
          </h2>
          <p className='md:text-lg'>
            Are you ready to start, do you have a question, are you interested?
            <br />
            feel free to contact me!
          </p>
        </header>
        <div className='container mt-4 flex justify-center'>
          <Button
            href='/contact'
            className='mt-4 sm:mt-10 rounded py-4 px-10 dark:text-gray-50 text-gray-700 bg-transparent font-medium text-2xl border dark:border-gray-50 border-gray-800 transition duration-500 dark:hover:bg-gray-50 hover:bg-gray-900 dark:hover:text-gray-900 hover:text-gray-50'>
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
