import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <p>{review.reviewText}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );
};

export default Review;
