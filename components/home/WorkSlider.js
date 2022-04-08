import { Splide, SplideSlide } from '@splidejs/react-splide';
import projectsData from '../../public/data/projects';
import Image from 'next/image';

const WorkSlider = () => {
  // const newProjectsData = projectsData
  //   .sort((a, b) => 0.5 - Math.random())
  //   .reverse();
  return (
    <div className='container'>
      <Splide
        hasAutoplayProgress
        options={{
          type: 'loop',
          drag: true,
          focus: 'center',
          perPage: 1,
          arrows: false,
          pagination: false,
          rewind: true,
          gap: '3vw',
          autoplay: true,
          pauseOnHover: true,
          pauseOnFocus: true,
          dragMinThreshold: true,
          classes: { pagination: 'splide__pagination splide_pagination' },
          interval: 5000,
          speed: 1200,
        }}>
        {projectsData.map((proj) => (
          <SplideSlide
            key={proj.id}
            className='w-full flex items-center justify-center'>
            <div className='relative cursor-move z-10 rounded-xl overflow-hidden group duration-500 hover:-translate-y-4'>
              <div className='max-h-[76vh] max-w-[100%] w-[1440px] relative z-10'>
                <Image src={proj.image} alt={proj.title} layout='responsive' />
              </div>
              {/* overlay */}
              <div className='absolute w-full h-full inset-0 top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-50 z-20 transition-all duration-500 group-hover:opacity-30'></div>
              {/* content */}
              <div className='absolute flex-col inset-0 p-3 sm:p-5 md:p-12 w-full h-full flex justify-end items-start z-30'>
                <a
                  href={proj.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='cursor-pointer'>
                  <h3 className='text-gray-50 text-lg sm:text-xl md:text-4xl font-bold'>
                    {proj.title}
                  </h3>
                  <div className='text-xs md:text-base'>View live -&gt;</div>
                </a>
              </div>
            </div>
          </SplideSlide>
        ))}
        <div className='splide__progress'>
          <div className='splide__progress__bar'></div>
        </div>
      </Splide>
    </div>
  );
};

export default WorkSlider;
