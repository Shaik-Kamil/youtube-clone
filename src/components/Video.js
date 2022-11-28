import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import './Video.css'
import { showApi } from './Fetch';
export default function Video({videos}) {
  const { id } = useParams();
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [userComment, setUserComment] = useState({
    comment:'',
    user:'',
  })
  const [comments] = useState([])
  const [show, setShow] = useState([])
  
  useEffect(() => {
    showApi()
      .then((res) => {
        setShow(res.items);
      })
      .catch((err) => {

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
console.log(show)
  // function handleComment
  return (
    <div className='picture'>
      <section>
      <div>
      <YouTube videoId={id} opts={opts} />
      <section>
      {show.map((video) => {
        return (
          <div>
              <p>{video.snippet.title}</p>
          </div>
        );
      })}
    
        {/* Does not work with T or accessing with ID. Tried using its own data param but might be understanding it wrong */}
      </section>
      <br/>
      <hr/>
      <div className='votes'>
      <button className='likes' onClick={()=>{setLike(like + 1)}}> ⬆Like {like}</button>
      &nbsp;
      <button className='dislikes' onClick={()=>{setDislike(dislike + 1)}}> ⬇ Dislike </button>
      </div>
    </div>
    <form className='commentForm' onSubmit={(e)=>{
    e.preventDefault();
    setUserComment({
      comment:'',
      user:'',
    });
    }}>
      <label htmlFor='name'>User Name</label>
      &nbsp;
      <input id='user' type='text' placeholder='Enter Name Here' onChange={(e) => setUserComment({...userComment, [e.target.id]: e.target.value})}/>
      <br/>
      <br/>
      <label htmlFor='comment'>Comment</label>
      &nbsp;
      <input id='comment' type='text' placeholder='Enter Comment Here'  onChange={(e) => setUserComment({...userComment, [e.target.id]: e.target.value})} />
      &nbsp;
      <button type='submit' >Submit</button>
      </form>
      {/* <ul>
    
      </ul> */}
      </section>
    </div>
  );
}