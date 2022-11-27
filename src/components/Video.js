import React from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import './Video.css'
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
    <div className='picture'>
      <section>
      <div>
      <YouTube videoId={id} opts={opts} />
      <section>
        <h1>{id.title ? id.snippet.title : null}</h1>
      </section>
    </div>
      </section>
    </div>
  );
}
//FIX THE TITLE T TO SAY Name & Description