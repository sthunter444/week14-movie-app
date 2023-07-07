import React from 'react';
import MovieList from './MovieList';

const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    image: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  },
  {
    id: 2,
    title: 'The Godfather',
    image: 'https://www.themoviedb.org/t/p/original/dApPtrfqXMKc9BOm2qOCQCpz8aS.jpg',
    synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    image: 'https://www.themoviedb.org/t/p/original/pbWgQPC6l9pkpEpi3WNRSfWYNP6.jpg',
    synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  },
];

const App = () => {
  return (
    <div>
      <h1>Movie Reviews</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
