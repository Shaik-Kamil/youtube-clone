// import { useState } from 'react';
import { searchVideo } from './Fetch';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ videos, setVideos, search, setSearch }) {
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
    <section>
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
          Search
        </button>
      </form>
    </section>
  );
}
