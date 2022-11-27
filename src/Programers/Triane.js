import React from 'react';
import '../components/About.css';
import { Link } from 'react-router-dom';
import './Triane.css'

export default function Triane() {
  return (
    <main className='aboutT'>
      <div id="about">
        <h2 id="Triane">Triane Peart</h2>
        <img className='Triane'
          alt="Triane"
          id="abouts"
          src="https://media-exp1.licdn.com/dms/image/C5603AQEJMqIPm9UU6g/profile-displayphoto-shrink_800_800/0/1582238986519?e=1674086400&v=beta&t=mA3SSEOF_cC3DG8mEQn03p2haKbAAOVkeYPjxwgBGzc"
        />
        <p className='ps'> My name is Triane Peart and I am a current Fellow at Pursuit. In my spare time I enjoy writing and visual art. I am not the best at speaking about myself out of context.</p>
      </div>
      <li className='return'><Link to='/About'>
       Return
      </Link></li>
      <footer className="footer">
      Connect with Me!
      <a href="https://github.com/TrianePeart">Triane's GitHub</a>
        <a href="www.linkedin.com/in/trianepeart">Triane's linkedin</a>
      </footer>
    </main>
  );
}