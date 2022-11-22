import { useState } from 'react';
import { searchVideo, showApi } from './Fetch';
import Video from './Video';
import { Link } from 'react-router-dom';

// let key = process.env.REACT_APP_API_KEY;
export default function SearchBar({ videos, setVideos }) {
  const [search, setSearch] = useState('');
  // let [vid, setVid] = useState({})
  
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
  
// console.log(showApi())
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
      {(videos?.map((video) => {
        //That question mark is weird but it gets rid of the red. 
        return (
          <div key={video.id.VideoId} className='video'>
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
