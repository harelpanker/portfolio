import logos from '../../public/data/logos';
import Image from 'next/image';
import Link from 'next/link';

const Logos = () => {
  return (
    <section className='py-12 md:py-36 px-4 dark:text-gray-50 text-gray-900'>
      <div className='container max-w-7xl p-0 rounded-xl relative flex flex-col'>
        <header className='container mb-10 md:mb-16'>
          <h2 className='text-center text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-600 to-purple-500'>
            Companys I'm proude to work with
          </h2>
        </header>
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 content-center items-center'>
          {logos.map((logo) => (
            <li
              key={logo.id}
              className='flex justify-center transition-all hover:-translate-y-1 filter invert dark:invert-0 lg:opacity-80 lg:hover:opacity-100 cursor-pointer'>
              <Link href={logo.url}>
                <a>
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={150}
                    height={100}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Logos;
