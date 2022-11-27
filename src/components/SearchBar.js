// import { useState } from 'react';
import { searchVideo } from './Fetch';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({setVideos, search, setSearch }) {
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const getSubmit = e.target.value;
    if (getSubmit !== '') {
      searchVideo(search)
        .then((data) => {
          setVideos(data.items);
          navigate('/video');
        })
        .catch((error) => console.log(error));
      setSearch('');
    }
  }

  return (
    <section className='search-bar'>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="search-Input"
            placeholder="Enter search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </label>
        <button type="submit" value="submit">
        <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png'/>
        </button>
      </form>
    </section>
  );
}
