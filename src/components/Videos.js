import React from 'react';
import Search from './Search';
import YouTube from 'react-youtube';
export default function Videos({ videos, title, setTitle, id }) {
  console.log(videos, title, setTitle, id);
  return (
    <div>
      <YouTube id={id} />
      <section>
        <p>{title ? title[0].snippet.title : 'Error'}</p>
      </section>
    </div>
  );
}
