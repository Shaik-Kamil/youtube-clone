import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
import { showApi } from './Fetch';
import SearchBar from './SearchBar';
import './Home.css';
import Video from './Video';

export default function Home({
  // title,
  // setTitle,
  // error,
  // setError,
  videos,
  setVideos,
}) {
  // const [data, setData] = useState([]);
  // // let { id } = useParams();

  // //! api result displays properly when console logged
  // // console.log(showApi());
  // let result = JSON.parse(window.localStorage.getItem(data));
  // useEffect((e) => {
  //   if (result) {
  //     setData(result.items);
  //   } else {
  //     showApi()
  //       .then((res) => {
  //         window.localStorage.setItem(data, JSON.stringify(data));
  //         setData(res.items);

  //         // setError(false);
  //       })
  //       .catch((err) => {
  //         setData([]);
  //         // setError(true);
  //       });
  //   }
  // }, []);

  // const dataMap = data.map((e, index) => {
  //   return (
  //     <section key={index}>
  //       <Link to={`/video/${e.id.videoId}`}>
  //         <img
  //           src={e.snippet.thumbnails.high.url}
  //           alt={e.snippet.description}
  //         />
  //         <p>{e.snippet.title}</p>
  //       </Link>
  //     </section>
  //   );
  // });

  return (
    <div>
      <SearchBar setVideos={setVideos} />
      {/* {dataMap} */}
      {videos.length === 0 ? (
        <h3>'No Search Results Yet!, Please submit a search above!'</h3>
      ) : (
        <Video videos={videos} />
      )}
    </div>
  );
}
//this needs to be inside of a div or something
