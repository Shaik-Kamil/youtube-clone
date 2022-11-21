import React from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
export default function Video() {
  const { id } = useParams();
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
        {/* <p>{title ? title[0].snippet.title : 'Error'}</p> */}
      </section>
    </div>
  );
}
