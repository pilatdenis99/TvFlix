import React, {useEffect, useState} from 'react';
import {api_key, fetchDataFromServer, getMovieList} from "../assets/js/api.js";

const Sidebar = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function ({genres}) {
                const newGenreList = [];
                for (const {id, name} of genres) {
                    newGenreList[id] = name;
                }
                setGenres(newGenreList);
            });
    }, [])

    return (
        <nav className="sidebar">
            <div className="sidebar-inner">
                <div className="sidebar-list">
                    <p className="title">Genre</p>
                    {genres && Object.entries(genres).map(([genreId, genreName]) => (<a className="sidebar-link" href="" menu-close="" onClick={()=> getMovieList(`with_genres=${genreId}`, genreName)}>{genreName}</a>))}
                </div>
                <div className="sidebar-list">
                    <p className="title">Language</p>
                    <a href="/movie&language=en" menu-close="" className="sidebar-link" onClick={()=> getMovieList("with_original_language_en", "English")}>English</a>
                    <a href="/movie&language=fr" menu-close="" className="sidebar-link" onClick={()=> getMovieList("with_original_language_fr", "French")}>French</a>
                    <a href="/movie&language=de" menu-close="" className="sidebar-link" onClick={()=> getMovieList("with_original_language_de", "German")}>German</a>
                    <a href="/movie&language=ro" menu-close="" className="sidebar-link" onClick={()=> getMovieList("with_original_language_ro", "Romanian")}>Romanian</a>
                    <a href="/movie&language=es" menu-close="" className="sidebar-link" onClick={()=> getMovieList("with_original_language_es", "Spanish")}>Spanish</a>
                </div>
                <div className="sidebar-footer">
                    <p className="copyright">&copy; 2023 CodeCrafters</p>
                </div>
                <img
                    src="/tmdb-logo.svg"
                    width={130}
                    height={17}
                    alt="The Movie Database Logo"
                />
            </div>
        </nav>
    );
};

export default Sidebar;
// Nr 1
// <a className="sidebar-link" href="" menu-close="" onClick={()=> getMovieList(urlParam, genreName)}