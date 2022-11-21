import { useState } from 'react';
import { searchVideo } from './Fetch';

// let key = process.env.REACT_APP_API_KEY;
export default function SearchBar({ setVideos }) {
  const [title, setTitle] = useState('');
  // const [videos, setVideos] = useState([]);
  // const [error, setError] = useState(false);

  // function searchForm(searchInput) {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search?key=${key}&q=${searchInput}&type=video&part=snippet`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setVideos(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setError(true);
  //     });
  // }

  function handleSubmit(e) {
    // e.preventDefault();
    const getSubmit = e.target.value;
    setTitle(getSubmit);
    // searchForm(title);
    // e.target.reset(); // resets the form
  }

  // function handleChange(e) {
  //   const getTitle = e.target.value;
  //   setTitle(getTitle);
  // }

  return (
    <section>
      <label>
        Enter search here
        <input
          type="text"
          name="search-Input"
          // onChange={handleChange}
          value={title}
          onChange={handleSubmit}
        ></input>
      </label>
      <button
        type="submit"
        value="submit"
        onClick={() => searchVideo(setTitle, setVideos)}
      >
        Search
      </button>
    </section>
  );
}
