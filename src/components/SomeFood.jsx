import React from 'react';
import '../styles/components/SomeFood.css'

const SomeFood = () => {
  const banners = [
    { src: '/assets/images/main_bnn_brand01.jpg', title: '독특한 감성의 디자인' },
    { src: '/assets/images/main_bnn_brand02.jpg', title: '친환경 재료 건강푸드' },
    { src: '/assets/images/main_bnn_brand03.jpg', title: '재활용 가능성을 향상' },
  ];
  return (
    <div className='somefood'>
      <div className="somefood-inner inner">
        <div className="somefood-left">
          <h1>GRANOLA WITH HONEY BITS</h1>
          <div className="somefood-title">
            맛도 좋고 유기농<br />
            재료로 만든 썸푸드
          </div>
          <div className="somefood-desc">
            우리들만의 아이디어로 만들어가는 브랜드, 썸푸드입니다.
            원하시는 내용으로 구성하여 메인에 브랜드를 소개해보세요.
            자세한 사용방법이 메뉴얼에 안내되어있습니다.
          </div>
        </div>
        <div className="somefood-right">
          <ul>
            <li>
              {banners.map((banner, index) => (
                <div key={index} className="banner-item">
                  <div className="banner-item-img">
                    <img src={banner.src} alt={banner.title} />
                  </div>
                  <span className="banner-title">{banner.title}</span>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SomeFood