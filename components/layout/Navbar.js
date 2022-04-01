import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo.svg';
import { NavItem } from '../../styles/styles.js';
import DarkMode from './DarkMode.js';

const navbar = () => {
  return (
    <nav className='fixed z-50 md:sticky bottom-0 md:top-0 md:h-screen w-full md:w-min h-auto dark:bg-gray-50 bg-gray-900 md:py-4 py-6 md:px-2 px-4 flex md:flex-col items-center flex-row md:justify-between align-bottom transition-all duration-500'>
      <div className='hidden md:inline-block w-12'>
        <Link href='/'>
          <a className='cursor-pointer w-20'>
            <Image src={logo} alt='Panker.io logo' />
          </a>
        </Link>
      </div>
      <ul className='flex justify-around md:justify-center gap-6 flex-grow font-medium text-sm md:text-lg md:absolute left-1/2 top-1/2 transform md:-rotate-90 md:-translate-x-2/4'>
        <NavItem
          href='/work'
          className='transition duration-500 ease-in-out text-gray-400 dark:hover:text-gray-900 hover:text-gray-50'>
          Work
        </NavItem>
        <NavItem
          href='/services'
          className='transition duration-500 ease-in-out text-gray-400 dark:hover:text-gray-900 hover:text-gray-50'>
          Services
        </NavItem>
        <NavItem
          href='/skills'
          className='transition duration-500 ease-in-out text-gray-400 dark:hover:text-gray-900 hover:text-gray-50'>
          Skills
        </NavItem>
        <NavItem
          href='/contact'
          className='transition duration-500 ease-in-out text-gray-400 dark:hover:text-gray-900 hover:text-gray-50'>
          Contact
        </NavItem>
      </ul>
      <div className='hidden md:block'>
        <DarkMode />
      </div>
    </nav>
  );
};

export default navbar;
