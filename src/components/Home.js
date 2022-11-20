import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { showApi } from './Fetch';
import Search from './Search';
import './Home.css';

export default function Home({
  // title,
  // setTitle,
  // error,
  setError,
  data,
  setData,
}) {
  let { id } = useParams();

  //! api result displays properly when console logged
  // console.log(showApi());
  let result = JSON.parse(window.localStorage.getItem(data));
  useEffect((e) => {
    if (result) {
      setData(result.items);
    } else {
      showApi()
        .then((res) => {
          window.localStorage.setItem(data, JSON.stringify(data));
          setData(res.items);

          setError(false);
        })
        .catch((err) => {
          setData([]);
          setError(true);
        });
    }
  }, []);

  return (
    <div>
      <Search />
      {data.map((e, index) => {
        return (
          <section key={index}>
            <Link to={`/video/${e.id.videoId}`}>
              <img
                src={e.snippet.thumbnails.high.url}
                alt={e.snippet.description}
              />
              <p>{e.snippet.title}</p>
            </Link>
          </section>
        );
      })}
    </div>
  );
}
