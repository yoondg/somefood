import React from 'react'
import Title from './Title';
import ProductCard from './ProductCard';
import products from '../data/products.json';
import '../styles/components/PopularProducts.css'

const PopularProducts = ({ addToCart }) => {
  const popularProducts = products;
  console.log(popularProducts);
  return (
    <section className='popular-products inner'>
      <Title title="TODAY'S NEW" subTitle="새롭게 입고된 제품들을 소개합니다." />
      <div className='product-list'>
        {popularProducts.map((product, index) => (
          <ProductCard key={index}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts