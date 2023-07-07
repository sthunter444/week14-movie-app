import React from 'react';

const Stars = ({ rating, onChange }) => {
  const handleStarClick = (value) => {
    onChange(value);
  };

  return (
    <div>
      <h3>Rate:</h3>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{ cursor: 'pointer' }}
          onClick={() => handleStarClick(value)}
        >
          {value <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Stars;
