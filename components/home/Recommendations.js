import recommendations from '../../public/data/recommendations';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);

const Recommendations = () => {
  return (
    <section className='py-12 md:py-36 px-4 dark:text-gray-50 text-gray-900'>
      <div className='container max-w-2xl p-0 rounded-xl relative'>
        <Swiper
          tag='div'
          wrapperTag='ul'
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          grabCursor={true}>
          {recommendations.map((recommendation) => (
            <SwiperSlide
              key={recommendation.id}
              tag='li'
              className='flex flex-col items-center text-center'>
              <p className='text-2xl max-w-xl italic mb-6'>
                {recommendation.body}
              </p>
              <Image
                width={100}
                height={100}
                src={recommendation.image}
                alt={recommendation.name}
                className='object-cover rounded-full'
              />
              <h3 className='uppercase text-lg mt-4'>{recommendation.name}</h3>
              <p className='text-sm'>{recommendation.position}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className='italic absolute -top-6 left-4 md:left-7 text-9xl opacity-30'>
          "
        </p>
      </div>
    </section>
  );
};

export default Recommendations;
