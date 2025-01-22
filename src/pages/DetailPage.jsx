import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title';
import '../styles/components/DetailPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Swiper 기본 스타일
import 'swiper/css/pagination'; // 페이지네이션 스타일
import productsData from '../data/products.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('info');

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="detail-page inner">
      <div className="product-wrap">
        <div className="detail-product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-prices">
            {product.discountRate > 0 && (
              <span className="original-price">{product.price}원</span>
            )}
            <span className="discounted-price">
              {Math.floor(product.price * (1 - product.discountRate / 100))}원
            </span>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="delivery-info">
            <p>배송비: 2,500원 (50,000원 이상 구매 시 무료)</p>
            <p>(최소주문수량 1개 이상)</p>
          </div>
          <div className="total-price">
            <p>{product.name} {Math.floor(product.price * (1 - product.discountRate / 100))}원</p>
            <p>TOTAL {Math.floor(product.price * (1 - product.discountRate / 100))}원 (1개)</p>
          </div>
          <div className="action-buttons">
            <button className="add-to-cart">ADD CART</button>
            <button className="wish">WISH</button>
            <button className="buy-now">BUY IT NOW</button>
          </div>
        </div>
      </div>
      <Title title="WITH ITEM" />
      {/* Swiper 슬라이더 */}
      <Swiper
        pagination={{ clickable: true }} // 페이지네이션 설정
        modules={[Pagination]} // 필요한 모듈 추가
        className="mySwiper"
        spaceBetween={30} // 슬라이드 간 간격
        slidesPerView={5} // 한 번에 보여질 슬라이드 수
        loop={true} // 무한 루프 설정
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/assets/images/01.jpg`}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 탭 */}
      <div className="product-tabs">
        <ul className="tab-list">
          <li
            className={activeTab === 'info' ? 'active' : ''}
            onClick={() => setActiveTab('info')}
          >
            상품정보
          </li>
          <li
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            상품후기
          </li>
          <li
            className={activeTab === 'qa' ? 'active' : ''}
            onClick={() => setActiveTab('qa')}
          >
            Q&A
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === 'info' && <img src="../assets/images/productdetail.jpg" />}
          {activeTab === 'reviews' && <p>아직 작성된 상품후기가 없습니다.</p>}
          {activeTab === 'qa' && <p>아직 작성된 Q&A가 없습니다.</p>}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;