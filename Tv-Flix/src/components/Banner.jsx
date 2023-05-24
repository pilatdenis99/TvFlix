import React, {useEffect, useState} from 'react';
import HeroSliderItem from "./HeroSliderItem.jsx";
import HeroSliderControlItem from "./HeroSliderControlItem.jsx";
import {api_key, fetchDataFromServer} from "../assets/js/api.js";

const Banner = () => {
    const [controlItemIndex, setControlItemIndex] = useState(0)
    const [genreIdList, setGenreIdList] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
            function ({genres}) {
               const newGenreList = [];
               for (const {id, name} of genres) {
                   newGenreList[id] = name;
               }
               setGenreIdList(newGenreList);
            })
        fetchDataFromServer(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`, function ({results: movieList}) {
            setMovies(movieList);
        });
    }, [])
    return (
        <section className="banner" aria-label="Popular Movies">
            <div className="banner-slider">
                {movies&&movies.map((movie, index) => (
                    <HeroSliderItem index={index} movie={movie}/>
                ))}
            </div>
            <div className="slider-control">
                <div className="control-inner">
                    {movies&&movies.map((movie, index) => (<HeroSliderControlItem index={index} movie={movie}/>)) }
                </div>
            </div>
        </section>
    );
};

export default Banner;