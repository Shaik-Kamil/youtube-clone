import React from 'react';
import '../components/About.css'
import { Link } from 'react-router-dom';

export default function Shaik() {
  return (
      <main>
      <section className='shaik'>
      <div id="aboutSection">
        <h2 id="Shaik">Shaik Kamil</h2>
        <img
          alt="Shaik"
          id="abouts"
          src="https://avatars.githubusercontent.com/u/107490051?v=4"
        />
        <p style={{ color: 'darkblue' }}>
          I’m currently a FullStack web Development Fellow at Pursuit which is
          an intensive 12 month FullStack web development fellowship where I am
          upskilling/ reskilling to break into tech. I have always been the
          person who loves solving complex problems and breaking them down.
          Since I have always been an avid lifelong learner, Software
          Engineering felt like the next natural and logical step career-wise.
        </p>
        <p style={{ color: 'darkblue' }}>
          Prior to this, I have experiences in various roles all in one way or
          another that involve Operations Management, whether its my recent
          experience as a warehouse operations lead where I was in charge of
          both day to day operations as well as personnel management. I have
          worn many hats in this role such as customer service support, vendor
          management, delivery partners management and logistics management
          among many others. Looking back on my past work experiences, I have
          demonstrated an agile and quick adaptability to new roles and
          industries while successfully exceeding expectations.
        </p>
      </div>
      </section>
      <div>
      <li className='return'> <Link to='/About'>
       Return
      </Link></li>
      </div>
      <footer className="footer">
        Connect with Us!
        <a href="https://github.com/Shaik-Kamil">Shaik's GitHub</a>
        <a href="https://www.linkedin.com/in/shaikkamil/">Shaik's linkedin</a>
       </footer>
    </main>
  );
}
