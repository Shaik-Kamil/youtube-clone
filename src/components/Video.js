import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
export default function Video() {
  const { id } = useParams();
  const [video, setVideo] = useState()
  const opts = {
    videoId: id,
    width: '600px',
    height: '400px',
    autoplay: true,
    playsInline: true,
    aspectRatio: '16:9',
    allow: 'autoplay',
    allowFullScreen: true,
  };
  return (
    <div>
      <YouTube videoId={id} opts={opts} />
      <section>
      <div>
      <YouTube videoId={id} opts={opts} />
      <section>
        <h1>{video.items ? video.items[0].snippet.title : "loading..."}</h1>
        <h3>
          {video.items ? video.items[0].snippet.channelTitle : "loading..."}
        </h3>
        <p>
          {video.items ? video.items[0].statistics.viewCount : "loading..."}{" "}
          Views
        </p>
        <p>
          {video.items ? video.items[0].statistics.likeCount : "loading..."}{" "}
          Likes
        </p>
        <p>{video.items ? video.items[0].snippet.description : "loading..."}</p>
      </section>
    </div>
      </section>
    </div>
  );
}
