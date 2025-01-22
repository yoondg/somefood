import React from 'react'
import Title from './Title';
import ProductCard from './ProductCard';
import products from '../data/products.json';
import '../styles/components/PopularProducts.css'
const SteadySeller = ({ addToCart }) => {
  const popularProducts = products;
  console.log(popularProducts);
  return (
    <section className='popular-products inner'>
      <Title title="STEADY SELLER" subTitle="꾸준히 사랑받는 스테디셀러입니다." />
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

export default SteadySeller