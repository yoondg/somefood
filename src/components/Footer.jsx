import React from 'react';
import '../styles/components/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-inner inner'>
        <div className="footer-left">
          <div className="call">
            <h1>1588-0000</h1>
            <ul>
              <li>MON-FRI 10:00 - 18:00 / LUNCH 12:00 - 13:30 /</li>
              <li>SAT, SUN, HOLY OFF</li>
              <li>국민 0000-00-0000 / 예금주 어썸디</li>
            </ul>
          </div>
          <div className="company">
            <h3>COMPANY</h3>
            <ul>
              <li>SOME FOOD대표이사 대표 관리자개인정보보호책임자 책임자명사업자등록번호 0000-0000</li>
              <li>통신판매신고번호 0000-0000[사업자정보확인]</li>
              <li>대표전화 1588-0000팩스 대표메일 email@email.com</li>
              <li>주소 서울특별시 강남구 가로수길 55-4 (신사동)</li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <ul className='row'>
            <li><a href="#none">회사소개</a></li>
            <li><a href="#none">이용약관</a></li>
            <li><a href="#none">쇼핑몰이용안내</a></li>
            <li><a href="#none">개인정보처리방침</a></li>
          </ul>
          <div>
            <ul>
              <li>NOTICE</li>
              <li>REVIEW</li>
              <li>Q&A</li>
              <li>EVENT</li>
            </ul>
            <ul>
              <li>마이페이지</li>
              <li>장바구니(0)</li>
              <li>관심상품(0)</li>
              <li>주문조회</li>
              <li>쿠폰내역</li>
              <li>적립금내역</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer