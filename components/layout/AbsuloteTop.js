import Image from 'next/image';
import Link from 'next/link';
import { SMIcon } from '../../styles/styles';
import DarkMode from './DarkMode';

const AbsuloteTop = () => {
  return (
    <div className='fixed bg-gray-50 dark:bg-gray-900 top-0 z-20 w-full py-4 md:py-6 px-4 md:px-12 flex justify-between align-middle md:justify-end'>
      <div className='dark:text-gray-50 text-gray-900 text-4xl font-extrabold relative top-1 flex gap-4'>
        <div className='md:hidden inline-block'>
          <Link href='/'>P.</Link>
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
            href='https://www.facebook.com/harel.panker'>
            <Image
              className='filter invert dark:invert-0'
              alt='facebook'
              width={20}
              height={20}
              src='/icons/facebook-white.svg'
            />
          </SMIcon>
        </li>
        <li>
          <SMIcon
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/harelpanker'>
            <Image
              className='filter invert dark:invert-0'
              alt='facebook'
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
