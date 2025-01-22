import React from 'react'
import SomeFood from '../components/SomeFood';
import MainVisual from '../components/MainVisual';
import NewsEvent from '../components/NewsEvent';
import PopularProducts from '../components/PopularProducts';
import SteadySeller from '../components/SteadySeller';
import RealReview from '../components/RealReview';

const HomePage = () => {
  return (
    <div>
      <MainVisual />
      <SomeFood />
      <NewsEvent />
      <PopularProducts />
      <SteadySeller />
      <RealReview />
    </div>
  )
}

export default HomePage