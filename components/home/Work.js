import WorkList from '../../components/work/WorlList';
import { Button } from '../../styles/styles';

const Work = () => {
  return (
    <section className='py-12 md:py-36 px-4 dark:text-gray-50 text-gray-900'>
      <header className='container mb-10 md:mb-16'>
        <h2 className='text-center text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-yellow-600'>
          Recent Work
        </h2>
      </header>
      <WorkList number={3} />
      <div className='container mt-12 flex justify-center'>
        <Button
          href='/work'
          className='mt-10 rounded py-4 px-10 dark:text-gray-50 text-gray-700 bg-transparent font-medium text-2xl border dark:border-gray-50 border-gray-800 transition duration-500 dark:hover:bg-gray-50 hover:bg-gray-900 dark:hover:text-gray-900 hover:text-gray-50'>
          See More
        </Button>
      </div>
    </section>
  );
};

export default Work;
