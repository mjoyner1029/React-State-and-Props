import React, { useState } from 'react';

const MoviesList = () => {
    const initialMovies = [
        { title: 'Inception', description: 'A mind-bending thriller by Christopher Nolan.', genre: 'Sci-Fi' },
        { title: 'The Dark Knight', description: 'A thrilling Batman story.', genre: 'Action' },
        { title: 'Pulp Fiction', description: 'A classic by Quentin Tarantino.', genre: 'Crime' },
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [showAll, setShowAll] = useState(true);
    const [toggleStates, setToggleStates] = useState({});

    const toggleView = () => {
        setShowAll(!showAll);
    };

    const removeMovie = (title) => {
        setMovies(movies.filter(movie => movie.title !== title));
    };

    const toggleDetails = (title) => {
        setToggleStates(prevStates => ({
            ...prevStates,
            [title]: !prevStates[title],
        }));
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
                            <span onClick={() => toggleDetails(movie.title)}>
                                {movie.title}
                            </span>
                            {toggleStates[movie.title] && <p>{movie.description}</p>}
                            <button onClick={() => removeMovie(movie.title)}>Remove</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MoviesList;
