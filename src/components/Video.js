import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import './Video.css';
import { showApi } from './Fetch';
export default function Video() {
  const { id } = useParams();
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [userComment, setUserComment] = useState({
    comment: '',
    user: '',
  });
  const [comments] = useState([]);
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false)

  function hideMe(){
    setHide(!hide)
  }

  useEffect(() => {
    showApi(id)
      .then((res) => {
        setShow(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const opts = {
    videoId: id,
    width: '600px',
    height: '400px',
    playerVars: {
      autoplay: 1,
    },
    playsInline: true,
    aspectRatio: '16:9',
    allow: 'autoplay',
    allowFullScreen: true,
  };

  console.log(show);
  return (
    <div className="picture">
      <section>
        <div>
          <YouTube videoId={id} opts={opts} />
          <section>
            {show.map((video) => {
              return (
            <main>
            {/* Votes */}
            <section className='votes'>
                <div  className="likes">
             <button
              onClick={() => {
                setLike(like + 1);
              }}
              >
              {' '}
              ⬆Like {like}
            </button>
            </div>
            <div className='dislikes'>
            <button
              onClick={() => {
                setDislike(dislike + 1);
              }}
            >
              {' '}
              ⬇ Dislike{' '}
            </button>
            </div>
            </section>
            {/* Headings */}
            <section className='info'>
              <h2>{video.snippet.title}</h2>
              <h1>{video.snippet.channelTitle}</h1>
              </section>
            </main>
              );
            })}
          </section>
          {/* Toggle Section */}
          <section>
            {show.map((video) => {
              return (
                <section className='info'>
                  <button className='hidden' onClick={() => {hideMe()}}>
                    {!hide ? "More..." : "Less..."}</button>
                    {hide ? <p><span style={{ fontWeight: 'bold' }}>Description:</span> 
                    <br/>
                    <br/>
                    {video?.snippet?.description}</p>: null}
                </section>
              );
            })}
          </section>
          <hr />
          
        </div>
        <form
          className="commentForm"
          onSubmit={(e) => {
            e.preventDefault();
            comments.push(userComment);
            setUserComment({
              comment: '',
              user: '',
            });
          }}
        >
          <label htmlFor="name">User Name</label>
          &nbsp;
          <input
            id="user"
            type="text"
            value={userComment.user}
            placeholder="Enter Name Here"
            onChange={(e) => 
              setUserComment({ ...userComment, [e.target.id]: e.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="comment">Comment</label>
          &nbsp;
          <input
            id="comment"
            type="text"
            value={userComment.comment}
            placeholder="Enter Comment Here"
            onChange={(e) =>
              setUserComment({ ...userComment, [e.target.id]: e.target.value }
              )
            }
          />
          &nbsp;
          <button type="submit">Submit</button>
        </form>
      </section>
    <aside className='box'>
        <ul>
          {comments.map(({user, comment}) => {
            return (
             <li>
             <h3>{user}:</h3>
             <p>{comment}</p>
             </li>
            );
          })}
          {/* This is laying over comments */}
        </ul>
    </aside>
    </div>
  );
}
