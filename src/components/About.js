import React from 'react';
import './About.css';

export default function About() {
  return (
    <main>
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
        <br />
        <h2 id="Triane">Triane Peart</h2>
        <img
          alt="Triane"
          id="abouts"
          src="https://media-exp1.licdn.com/dms/image/C5603AQEJMqIPm9UU6g/profile-displayphoto-shrink_800_800/0/1582238986519?e=1674086400&v=beta&t=mA3SSEOF_cC3DG8mEQn03p2haKbAAOVkeYPjxwgBGzc"
        />
        <p>Information About the project be added</p>
      </div>
      <footer className="footer">
        Connect with Us!
        <a href="https://github.com/Shaik-Kamil">Shaik's GitHub</a>
        <a href="https://www.linkedin.com/in/shaikkamil/">Shaik's linkedin</a>
        <a href="https://github.com/TrianePeart">Triane's GitHub</a>
        <a href="www.linkedin.com/in/trianepeart">Triane's linkedin</a>
      </footer>
    </main>
  );
}
