import React from 'react';
import { Link } from 'react-router-dom';

function ListVideos({ videos, search }) {
  return (
    <section>
      {videos.map((video, index) => {
        return (
          <div key={index} className="video">
            <Link to={`/video/${video.id.videoId}`}>
              <img src={video.snippet.thumbnails.high.url} alt={search} />
              <p>{video.snippet.title}</p>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default ListVideos;
