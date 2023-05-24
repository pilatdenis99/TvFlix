import React from 'react';
import {imageBaseURL} from "../assets/js/api.js";

const HeroSliderControlItem = ({index, movie}) => {
    const {
        poster_path,
        title
    } = movie
    return (
        <button className="poster-box slider-item" slider-control={index}>
            <img
                src={`${imageBaseURL}w154${poster_path}`}
                alt={`Slide to ${title}`}
                loading="lazy"
                draggable="false"
                className="img-cover"
            />
        </button>
    );
};

export default HeroSliderControlItem;