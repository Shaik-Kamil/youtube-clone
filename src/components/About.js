import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Shaik from '../Programers/Shaik';
import Triane from '../Programers/Triane'



export default function About() {
  return (
    <div id="aboutSection">
      <h1>About Project</h1>
        <p
          style={{
            color: 'blue',
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}
        >
          This project by Shaik and Triane uses the Youtube API to retrieve data
          based on user input to render relevant results on the page. The
          project uses React and Javascript primarily to accomplish this purpose
          while maintaining a responsive interface without refreshing the page
          after every search request.
        </p>
        <br />
      <button><Link to='/Shaik'>
        Shaik
      </Link>
      </button>
      <button>
      <Link to='/Triane'>
        Triane
      </Link>
      </button>
    </div>
  )
}
