import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchVideo } from './Fetch';
import Video from './Video';
import YouTube from 'react-youtube';

let key = process.env.REACT_APP_API_KEY;
export default function Search() {
  const [title, setTitle] = useState('');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  let { id } = useParams();

  let result = JSON.parse(window.localStorage.getItem(data));

  useEffect((e) => {
    if (result) {
      setData(result.items);
      // console.log('i exist');
    } else {
      searchVideo()
        .then((res) => {
          window.localStorage.setItem(data, JSON.stringify(data));
          setData(res.items);

          // console.log(`i don't exist`);
          // console.log(setData(res.items));
          setError(false);
        })
        .catch((err) => {
          setData([]);
          setError(true);
        });
    }
  }, []);
  function searchForm(searchInput) {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&q=${searchInput}&type=video&part=snippet`
    )
      .then((res) => res.json())
      .then((res) => {
        setVideos(res.items);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchForm(title);
    e.target.reset(); // resets the form
  }

  function handleChange(e) {
    const getTitle = e.target.value;
    setTitle(getTitle);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Enter search here
          <input
            type="text"
            name="search-Input"
            onChange={handleChange}
            value={title}
          />
          <input type="submit" value="submit" />
          {/* <Video /> */}
        </label>
      </form>
    </section>
  );
}
