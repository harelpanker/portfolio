const AbsuloteBottom = () => {
  return (
    <div className='bottom-0 w-full z-40 py-4 px-12 text-lg dark:text-gray-50 text-gray-900 md:flex justify-between items-end hidden md:absolute'>
      <h3>Harel Panker | Web Developer</h3>
      <div>
        <p className='font-bold'>Email:</p>
        <a
          className='opacity-75 hover:opacity-100 transition-all'
          href='mailto:harelpanker@protonmail.com'
          target='_blank'
          rel='noopener noreferrer'>
          harelpanker@pm.me
        </a>
      </div>
    </div>
  );
};

export default AbsuloteBottom;
