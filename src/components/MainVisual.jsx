import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/components/MainVisual.css';

// import required modules
import { Navigation, Pagination, Autoplay, Loop } from 'swiper/modules';

const MainVisual = () => {
  const images = [
    {
      src: '/assets/images/main_bnn_visual01.jpg',
      alt: 'Main Image 1',
      hash: '#숙취한방 #꿀차 #설탕대용',
      title: '자연에서 선사한\n아카시아 꿀',
      description: '자연에서 온 순수한 꿀만 담았습니다.\n정직하고 썸푸드만의 특별한 꿀'
    },
    {
      src: '/assets/images/main_bnn_visual02.jpg',
      alt: 'Main Image 2',
      title: '아침 간단 한 수저\n새콤달콤 레몬 꿀',
      hash: '#남녀노소 #누구나 #좋아하는',
      description: '아침을 꿀차와 함께 시작하세요!\n달콤한 꿀과 레몬이 만난 최고의 조합'
    },
    {
      src: '/assets/images/main_bnn_visual03.jpg',
      alt: 'Main Image 3',
      title: '건강한 영양성분 가득,\n아카시아 꿀',
      hash: '#남녀노소 #누구나 #좋아하는',
      description: '깊은 향과 쌉싸름한 맛이 특징인\n천연꿀에 정성을 담아 만들었습니다.'
    },
  ];
  return (
    <div className='mainvisual'>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1.5}
        className="mySwiper">

        {images.map((image, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div>
              <img className="swiper-image" src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
              <div className="text-content">
                <p className='hash'>{image.hash}</p>

                <h3 className='title'>
                  {image.title.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
                <p className='desc'>
                  {image.description.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>

                <a href="#none"><button className='mainvisual-button'>SHOW NOW</button></a>
              </div>
            </div>
          </SwiperSlide>
        ))}


      </Swiper >
    </div>
  )
}

export default MainVisual