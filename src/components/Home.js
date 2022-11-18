import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { showApi } from './Fetch';
import Search from './Search';
import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

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
            <Link to={`/video/${e.id}`}>
              <img
                src={e.snippet.thumbnails.high.url}
                alt={e.snippet.description}
              />
            </Link>
            <Link to={`/video/${e.id}`}>
              <p>{e.snippet.title}</p>
            </Link>
          </section>
        );
      })}
    </div>
  );
}
