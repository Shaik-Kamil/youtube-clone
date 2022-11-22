import { useState } from 'react';
import { searchVideo } from './Fetch';
import { Link } from 'react-router-dom';

export default function SearchBar({ videos, setVideos }) {
  const [search, setSearch] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    const getSubmit = e.target.value;
    if(getSubmit !== ''){
      searchVideo(search)
      .then((data) => {
        setVideos(data.items)
        console.log(data)
      })
      .catch((error) => console.log(error))
      setSearch('')
    }
  }
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="search-Input"
            placeholder='Enter search here'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </label>
        <button
          type="submit"
          value="submit"
        >
          Search
        </button>
      </form>
      {(videos?.map((video, index) => {
        return (
          <div key={index} className='video'>
          <Link to={`/video/${video.id.videoId}`}>
          <img src={video.snippet.thumbnails.high.url} alt={search}/>
          <p>{video.snippet.title}</p>
          </Link>
          </div>
        )
        })
      )}
    </section>

);

}
