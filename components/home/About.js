import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className='py-12 md:py-36 px-4 overflow-hidden dark:text-gray-50 text-gray-900'>
      <div className='container max-w-7xl p-0 grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden dark:bg-gray-800 bg-gray-100'>
        <figure className='relative h-h-30 md:h-auto'>
          <Image
            src='/profile.png'
            alt='Harel Panker | Web Developer'
            layout='fill'
            blurDataURL
            placeholder='blur'
            className='object-cover max-h-full'
          />
        </figure>
        <article className='p-10 max-h-full'>
          <header className='mb-8'>
            <h2 className='text-4xl font-bold'>
              Hi!
              <br />
              My name is{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-purple-500'>
                Harel Panker
              </span>
            </h2>
            <p className='opacity-80'>Front End Web Developer</p>
          </header>
          <div className='mb-8'>
            <p className='mb-3 opacity-80'>
              As a freelancer,{' '}
              <Link href='/skills'>
                <a className='text-blue-400 opacity-100 transition-all duration-300 hover:opacity-80'>
                  my knowledge is vast
                </a>
              </Link>
              , from the basics of web development, HTML-CSS-JavaScript to a bit
              more complex topics.
            </p>
            <p className='mb-3 opacity-80'>
              I use the most modern tools, with the best practice in mind to
              build{' '}
              <Link href='/work'>
                <a className='text-blue-400 opacity-100 transition-all duration-300 hover:opacity-80'>
                  my clients‘ website.
                </a>
              </Link>{' '}
              This gives them the edge in the competitive environment of the
              web.
            </p>
          </div>
          <footer className='mt-24 border-t dark:border-gray-50 border-gray-800 pt-6 flex justify-end'>
            <nav className='grid grid-cols-3 gap-2 text-center text-xs'>
              <Link href='/work'>
                <a className='cursor-pointer flex flex-col gap-1 items-center'>
                  <Image
                    src='/icons/projects.svg'
                    alt='Work icon'
                    width={24}
                    height={24}
                    className='filter invert dark:invert-0'
                  />
                  <p>Work</p>
                </a>
              </Link>

              <Link href='/skills'>
                <a className='cursor-pointer flex flex-col gap-1 items-center'>
                  <Image
                    src='/icons/skills.svg'
                    alt='skills icon'
                    width={24}
                    height={24}
                    className='filter invert dark:invert-0'
                  />
                  <p>Skills</p>
                </a>
              </Link>

              <Link href='/contact'>
                <a className='cursor-pointer flex flex-col gap-1 items-center'>
                  <Image
                    src='/icons/contact.svg'
                    alt='Contact icon'
                    width={24}
                    height={24}
                    className='filter invert dark:invert-0'
                  />
                  <p>Contact</p>
                </a>
              </Link>
            </nav>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default About;
