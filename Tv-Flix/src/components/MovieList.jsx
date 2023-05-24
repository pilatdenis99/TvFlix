import React from 'react';
import MovieCard from "./MovieCard.jsx";

const MovieList = ({movieList, title}) => {
    return (
        <section className="movie-list" aria-label={title}>
            <div className="title-wrapper">
                <h3 className="title-large">{title}</h3>
            </div>
            <div className="slider-list">
                <div className="slider-inner">
                    {
                        movieList.results?.map((movie) => <MovieCard movie={movie}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MovieList;