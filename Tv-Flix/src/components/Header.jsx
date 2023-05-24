import React, {useState} from 'react';

const Header = () => {

    return (
        <header className="header">
            <a href="/" className="logo">
                <img
                    src="/logo.svg"
                    width={140}
                    height={32}
                    alt="Cinema Central Home"
                />
            </a>
            <div className="search-box" search-box="">
                <div className="search-wrapper" search-wrapper="">
                    <input
                        type="text"
                        name="search"
                        aria-label="search movies"
                        placeholder="Search any movies"
                        className="search-field"
                        autoComplete="off"
                        search-field=""
                    />
                    <img
                        src="/search.png"
                        width={24}
                        height={24}
                        alt="search"
                        className="leading-icon"
                    />
                </div>
                <button className="search-btn" search-toggler="">
                    <img
                        src="/close.png"
                        width={24}
                        height={24}
                        alt="close search box"
                    />
                </button>
            </div>
            <button className="search-btn" search-toggler="" menu-close="">
                <img
                    src="/search.png"
                    width={24}
                    height={24}
                    alt="open search box"
                />
            </button>
            <button className="menu-btn" menu-btn="" menu-toggler="">
                <img
                    src="/menu.png"
                    width={24}
                    height={24}
                    alt="open manu"
                    className="menu"
                />
                <img
                    src="/menu-close.png"
                    width={24}
                    height={24}
                    alt="close menu"
                    className="close"
                />
            </button>
        </header>
    );
};

export default Header;