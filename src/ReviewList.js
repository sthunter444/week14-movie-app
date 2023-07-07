import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
