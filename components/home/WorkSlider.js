import { Splide, SplideSlide } from '@splidejs/react-splide';
import projectsData from '../../public/data/projects';
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <div className='container'>
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 1,
          arrows: false,
          pagination: false,
          rewind: true,
          gap: '1vw',
          autoplay: true,
          pauseOnHover: true,
          pauseOnFocus: true,
          dragMinThreshold: true,
        }}>
        {projectsData.map((proj) => (
          <SplideSlide
            key={proj.id}
            className='w-full flex items-center justify-center'>
            <a
              href={proj.url}
              target='_blank'
              rel='noopener noreferrer'
              className='relative rounded-xl overflow-hidden group duration-500 hover:-translate-y-4'>
              <div className='max-h-[76vh] max-w-[100%] w-[1440px] relative'>
                <Image
                  src={proj.image}
                  alt={proj.title}
                  layout='responsive'
                  blurDataURL
                  placeholder='blur'
                />
              </div>
              {/* overlay */}
              <div className='absolute w-full h-full inset-0 top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-50 z-20 transition-all duration-500 group-hover:opacity-30'></div>
              {/* content */}
              <div className='absolute inset-0 p-3 sm:p-5 md:p-12 w-full h-full flex justify-start items-end z-50'>
                <h3 className='text-gray-50 text-lg sm:text-xl md:text-4xl font-bold'>
                  {proj.title}
                </h3>
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default WorkSlider;
