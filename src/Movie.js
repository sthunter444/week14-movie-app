import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = () => {
    const newReview = {
      rating: rating,
      reviewText: reviewText,
    };
    setReviews([...reviews, newReview]);
    setRating(0);
    setReviewText('');
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <Stars rating={rating} onChange={handleRatingChange} />
      <ReviewList reviews={reviews} />
      <ReviewForm
        rating={rating}
        reviewText={reviewText}
        onReviewChange={handleReviewChange}
        onSubmitReview={handleSubmitReview}
      />
    </div>
  );
};

export default Movie;
