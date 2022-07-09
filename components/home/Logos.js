import logos from '../../public/data/logos';
import Image from 'next/image';

const Logos = () => {
  return (
    <section className='py-12 md:py-36 px-4 dark:text-gray-50 text-gray-900'>
      <div className='container max-w-7xl p-0 rounded-xl relative flex flex-col'>
        <header className='container mb-10 md:mb-16 relative z-10'>
          <h2 className='text-center text-5xl  md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-600 to-purple-500'>
            Companies I'm proud working with
          </h2>
        </header>
        <ul className='flex gap-10 justify-center flex-wrap items-center'>
          {logos.map((logo) => (
            <li
              key={logo.id}
              className='flex w-[43%] sm:w-auto max-w-[10rem] justify-center p-4 md:p-0 transition-all hover:-translate-y-1 filter invert dark:invert-0 lg:opacity-80 lg:hover:opacity-100 cursor-pointer'>
              <a href={logo.url} target='_blank' rel='noopener noreferrer'>
                <Image src={logo.image} alt={logo.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Logos;
