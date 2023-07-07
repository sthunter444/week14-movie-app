import React from 'react';

const ReviewForm = ({ rating, reviewText, onRatingChange, onReviewChange, onSubmitReview }) => {
  return (
    <div>
      <h3>Add a Review:</h3>
      <form onSubmit={onSubmitReview}>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          min="1"
          max="5"
          onChange={(event) => onRatingChange(parseInt(event.target.value))}
        />
        <br />
        <label htmlFor="review">Review:</label>
        <textarea id="review" value={reviewText} onChange={onReviewChange}></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
