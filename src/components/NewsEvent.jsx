import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/components/NewsEvent.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Autoplay, Loop } from 'swiper/modules';

const NewsEvent = () => {
  const images = [
    {
      src: '/assets/images/main_bnn_right01.jpg',
      alt: 'NewsEvent Image 1',
    },
    {
      src: '/assets/images/main_bnn_right02.jpg',
      alt: 'NewsEvent Image 2',
    },
  ];

  return (
    <div className='newsevent'>
      <div className='newsevent-inner inner'>
        <div className='news'>
          <div className='news-title'>
            <div className='title'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;새로 올라 온 소식</div>
            <a href='#none' className='btn-more'>
              more+
            </a>
          </div>
          <ul className='news-date'>
            <li>
              2023 적립금 소멸 안내 <em>2023-01-19</em>
            </li>
            <li>
              무료배송 이벤트를 진행합니다 <em>2023-01-19</em>
            </li>
            <li>
              새로워진 멤버십 혜택을 확인하세요 <em>2022-09-17</em>
            </li>
          </ul>
          <div className='news-img-box'>
            <img src="/assets/images/main_bnn_left.jpg" alt="" />
          </div>
        </div>
        <div className='evnet'>
          <Swiper
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}

            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
