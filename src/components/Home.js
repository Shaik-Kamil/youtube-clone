import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { showApi } from './Fetch';
import Search from './Search';
import YouTube from 'react-youtube';
import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  let { id } = useParams();

  // const opts = {
  //   videoId: id,
  //   title: data.snippet.title,
  // };

  //! api result displays properly when console logged
  // console.log(showApi());

  useEffect((e) => {
    showApi()
      .then((res) => {
        setData(res.items);
        // console.log(setData(res.items));
        setError(false);
      })
      .catch((err) => {
        setData([]);
        setError(true);
      });
  }, []);

  return (
    <div>
      <Search />
      {data.map((e) => {
        return (
          <section>
            <Link to={`/video/${e.id.videoId}`}>
              <img
                src={e.snippet.thumbnails.high.url}
                alt={e.snippet.description}
              />
            </Link>
            <Link to={`/video/${e.id.videoId}`}>
              <p>{e.snippet.title}</p>
            </Link>
          </section>
        );
      })}
    </div>
  );
}
