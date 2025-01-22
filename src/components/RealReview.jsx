import React from 'react';
import Title from './Title';
import ReviewCard from './ReviewCard';
import reviews from '../data/reviews.json'; // reviews.json 파일 임포트
import '../styles/components/RealReview.css'; // 스타일 파일 임포트

const RealReview = () => {
  return (
    <section className="real-review">
      <Title title="REAL REVIEW" subTitle="실제 사용자들의 생생한 리얼리뷰를 소개합니다." />
      <div className="review-wrap">
        <div className="review-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealReview;