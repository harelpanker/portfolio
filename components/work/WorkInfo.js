import Image from 'next/image';

const WorkInfo = ({ project }) => {
  return (
    <a
      href={project.url}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative p-3 md:p-12 aspect-w-1440 aspect-h-793 overflow-hidden rounded-xl h-full w-full'>
      {/* image */}
      <div className='absolute inset-0 w-full h-full z-10 transition-all group-hover:scale-105'>
        <Image
          className='w-full h-full object-center object-cover'
          src={project.image}
          alt={project.title}
          layout='fill'
          blurDataURL
          placeholder='blur'
        />
      </div>
      {/* overlay */}
      <div className='absolute inset-0 bg-gray-800 opacity-50 z-20 transition-all group-hover:opacity-30'></div>
      {/* content */}
      <div className='relative w-full h-full flex justify-start items-end z-50'>
        <h3 className='whitespace-pre text-gray-50 text-xl md:text-4xl font-bold'>
          {project.title}
        </h3>
      </div>
    </a>
  );
};

export default WorkInfo;
