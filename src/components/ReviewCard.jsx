import React from 'react';
import '../styles/components/ReviewCard.css'; // 스타일 파일 임포트

const ReviewCard = ({ review }) => {
  const { image, thumbnail, name, rating, title, review: reviewContent, username, date } = review;

  return (
    <div className="review-card">
      <div className="review-image-container">
        <img src={image} alt={name} className="review-image" />
      </div>
      <div className="review-content-container">
        <div className="review-top">
          <img src={thumbnail} alt="썸네일" className="thumbnail-image" />
          <div className="review-name-rating">
            <h3 className="review-product-name">{name}</h3>
            <img src={rating} alt="별점" className="rating-image" />
          </div>
        </div>
        <h4 className="review-title">{title}</h4>
        <p className="review-content">{reviewContent}</p>
        <div className="review-footer">
          <span className="review-username">{username}</span>
          <span className="review-date">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;