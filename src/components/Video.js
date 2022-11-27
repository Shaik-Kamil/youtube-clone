import React, {useState} from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import './Video.css'
export default function Video() {
  const { id } = useParams();
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [comments, setComments] = useState([])
  const [userComment, setUserComment] = useState({
    comment:'',
    user:''
  })

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
        <h1>{id.title ? id.snippet.title : "not working"}</h1>
      </section>
      <br/>
      <hr/>
      <div className='likes'>
      <button onClick={()=>{setLike(like + 1)}}> ⬆Like {like}</button>
      &nbsp;
      {/* This just adds a space. I'm... feeling a bit lazy */}
      <button onClick={()=>{setDislike(dislike + 1)}}> ⬇ Dislike {dislike}</button>
      </div>
    </div>
    <form className='commentForm'    onSubmit={(e) => {
                  e.preventDefault();
                  setUserComment({...userComment, [e.target.id]: e.target.value});
                  setUserComment("");
                  setComments("");
                }}>
      <label htmlFor='name'>User Name</label>
      &nbsp;
      <input type='text' placeholder='Enter Name Here' onChange={(e) => setUserComment(e.target.value)}/>
      <br/>
      <br/>
      <label htmlFor='comment'>Comment</label>
      &nbsp;
      {/* <input type='text' placeholder='Enter Comment Here'  onChange={(e) => setComments({...userComment, [e.target.id]:e.target.value})} /> */}
      {/* ABOVE MAKES PAGE GLITCH */}
      &nbsp;
      <button type='submit' >Submit</button>
      </form>
      <hr/>
      <ul>
        {comments.map(comment =>{
          return(
            <li key={id}> <span>{comment.user}</span> : {comment.userComment}</li>
          )
        })}
      </ul>
      </section>
    </div>
  );
}
//FIX THE TITLE T TO SAY Name & Description