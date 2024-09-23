import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', description: 'A mind-bending thriller by Christopher Nolan.', genre: 'Sci-Fi' },
        { title: 'The Dark Knight', description: 'A thrilling Batman story.', genre: 'Action' },
        { title: 'Pulp Fiction', description: 'A classic by Quentin Tarantino.', genre: 'Crime' },
    ]);

    const [showAll, setShowAll] = useState(true);

    const toggleView = () => {
        setShowAll(!showAll);
    };

    const removeMovie = (title) => {
        setMovies(movies.filter(movie => movie.title !== title));
    };

    return (
        <div>
            <button onClick={toggleView}>
                {showAll ? 'Show Only Action Movies' : 'Show All Movies'}
            </button>
            <ul>
                {movies
                    .filter(movie => showAll || movie.genre === 'Action')
                    .map(movie => (
                        <li key={movie.title}>
                            <span onClick={() => (movie.showDetails = !movie.showDetails)}>
                                {movie.title}
                            </span>
                            {movie.showDetails && <p>{movie.description}</p>}
                            <button onClick={() => removeMovie(movie.title)}>Remove</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MoviesList;
