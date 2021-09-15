import Link from 'next/link';
import { NavItem } from '../../styles/styles.js';
const navbar = () => {
  return (
    <nav className='fixed z-50 md:sticky bottom-0 md:top-0 md:h-screen w-full md:w-min h-auto bg-gray-50 md:py-4 py-6 md:px-6 px-4 flex md:flex-col flex-row md:justify-between align-bottom'>
      <div className='text-gray-900 text-4xl font-extrabold hidden md:inline-block'>
        <Link href='/'>P.</Link>
      </div>
      <ul className='flex justify-around md:justify-center gap-6 flex-grow font-medium text-sm md:text-lg md:absolute left-1/2 top-1/2 transform md:-rotate-90 md:-translate-x-2/4'>
        <NavItem
          href='/work'
          className='transition duration-500 ease-in-out text-gray-400 hover:text-gray-900'>
          Work
        </NavItem>
        <NavItem
          href='/services'
          className='transition duration-500 ease-in-out text-gray-400 hover:text-gray-900'>
          Services
        </NavItem>
        <NavItem
          href='/skills'
          className='transition duration-500 ease-in-out text-gray-400 hover:text-gray-900'>
          Skills
        </NavItem>
        <NavItem
          href='/contact'
          className='transition duration-500 ease-in-out text-gray-400 hover:text-gray-900'>
          Contact
        </NavItem>
      </ul>
    </nav>
  );
};

export default navbar;
