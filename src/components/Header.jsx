import React from 'react';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className='header'>
      <div className="popup">
        🍋 지금 썸푸드는 오픈기념 최대 50% 할인 이벤트 중입니다.
      </div>
      <div className="inner header-inner">
        <h1 className='header-logo'>
          <Link to="/">
            SOME FOOD
          </Link></h1>
        <nav>
          <ul className='main-menu'>
            <li><Link>BRAND</Link></li>
            <li><Link>PRODUCT</Link></li>
            <li><Link>SHOP</Link>
              <ul className="sub-menu">
                <li><Link to="/">NEW</Link></li>
                <li><Link to="/">BEST</Link></li>
                <li><Link to="/">GRANOLA</Link></li>
                <li><Link to="/">MUESLI</Link></li>
                <li><Link to="/">CEREAL</Link></li>
              </ul>
            </li>
            <li><Link>COMMUNITY</Link>
              <ul className="sub-menu">
                <li><Link to="/">NOTICE</Link></li>
                <li><Link to="/">REVIEW</Link></li>
                <li><Link to="/">Q&A</Link></li>
                <li><Link to="/">EVENT</Link></li>
              </ul>
            </li>
            <li><Link>CONTACT US</Link></li>
          </ul>
        </nav>
        {/* 장바구니, 검색 */}
        <div className='desktop-icons'>
          <Link to="/user" className='icon'>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/cart" className='icon cart'>
            <FontAwesomeIcon icon={faBagShopping} />
          </Link>
          <Link to="/search" className='icon'>
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </div>
      </div>
    </div>


  )
}

export default Header