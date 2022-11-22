import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
export default function Nav({ videos, setVideos, search, setSearch }) {
  return (
    <nav className="NavBar">
      <Link>
        <img
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-drawn-7.png"
          alt="youtube-log"
        />
      </Link>
      <Link exact to="/">
        Home
      </Link>
      <Link to="/About">About</Link>
      <SearchBar
        className="search-bar"
        videos={videos}
        setVideos={setVideos}
        search={search}
        setSearch={setSearch}
      />
    </nav>
  );
}
