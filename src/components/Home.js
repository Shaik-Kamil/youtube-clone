import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { showApi } from './Fetch';
import SearchBar from './SearchBar';
import './Home.css';
import Video from './Video';

export default function Home({
  search,
  videos,
  setVideos,
}) {

  return (
    <div>
      <SearchBar videos={videos} setVideos={setVideos} />
      <div className='searches'>
      {videos.length === 0 ? (<p>No Search Results Yet! Please submit a search above!</p>):
      (videos?.map((video) => {
        //That question mark is weird but it gets rid of the red. 
        return (
          // <div key={video.id.VideoId} className='video'>
          // <Link to={`/video/${video.id.videoId}`}>
          // <img src={video.snippet.thumbnails.high.url} alt={search}/>
          // <p>{video.snippet.title}</p>
          // </Link>
          // </div>
          <div></div>
          //BREAK THIS APART
        )
        })
      )}
      </div>
    </div>

  );
}
//this needs to be inside of a div or something
