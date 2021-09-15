import Image from 'next/image';
import Link from 'next/link';
import { SMIcon } from '../../styles/styles';

const AbsuloteTop = () => {
  return (
    <div className='absolute top-0 z-20 w-full py-4 md:py-6 px-4 md:px-12 flex justify-between align-middle md:justify-end'>
      <div className='text-gray-50 text-4xl font-extrabold md:hidden inline-block relative top-1'>
        <Link href='/'>P.</Link>
      </div>
      <ul className='flex gap-4 items-center'>
        <li>
          <div className='w-14 h-px bg-gray-50'></div>
        </li>
        <li>
          <SMIcon
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/harel.panker'>
            <Image
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
