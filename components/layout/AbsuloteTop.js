import Image from 'next/image';
import Link from 'next/link';
import { SMIcon } from '../../styles/styles';
import logo from '/public/logo.svg';
import DarkMode from './DarkMode';

const AbsuloteTop = () => {
  return (
    <div className='fixed items-center bg-gray-50 dark:bg-gray-900 top-0 right-0 z-40 w-full py-4 md:py-6 px-4 md:px-12 flex justify-between align-middle md:justify-end'>
      <div className='relative top-1 flex gap-4'>
        <div className='md:hidden flex justify-center items-center'>
          <Link href='/'>
            <a className='cursor-pointer w-full max-w-[2.5rem] flex justify-center items-center'>
              <Image src={logo} alt='Panker.io logo' />
            </a>
          </Link>
        </div>
        <div className='md:hidden flex items-center'>
          <DarkMode />
        </div>
      </div>
      <ul className='flex gap-4 items-center'>
        <li>
          <div className='w-14 h-px dark:bg-gray-50 bg-gray-900'></div>
        </li>
        <li>
          <SMIcon
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/harelpanker'>
            <Image
              className='filter invert dark:invert-0'
              alt='github'
              width={20}
              height={20}
              src='/icons/github-white.svg'
            />
          </SMIcon>
        </li>
        <li>
          <SMIcon
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/panker-harel/'>
            <Image
              className='filter invert dark:invert-0'
              alt='linkedin'
              width={20}
              height={20}
              src='/icons/linkedin-white.svg'
            />
          </SMIcon>
        </li>
      </ul>
    </div>
  );
};

export default AbsuloteTop;
