import SearchBar from './SearchBar';
import './Home.css';


export default function Home({
  videos,
  setVideos,
}) {

  return (
    <div>
      <SearchBar videos={videos} setVideos={setVideos} />
      <div className='searches'>
      {videos.length === 0 ? (<p>No Search Results Yet! Please submit a search above!</p>): null}
      </div>
    </div>

  );
}

