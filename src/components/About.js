import React from 'react';
import './About.css'

export default function About() {



    return (
        <main>
        <div id='aboutSection'>
           <h1>About This Project</h1>
           <p>Information About the Project to be added later</p>
           <br/> 
           <h2 id="Shaik">Shaik Kamil</h2>
           <img id='abouts' src='https://avatars.githubusercontent.com/u/107490051?v=4'/>
           <p>Information about me</p>
           <br/>
           <h2 id="Triane">Triane Peart</h2>
           <img id='abouts' src='https://media-exp1.licdn.com/dms/image/C5603AQEJMqIPm9UU6g/profile-displayphoto-shrink_800_800/0/1582238986519?e=1674086400&v=beta&t=mA3SSEOF_cC3DG8mEQn03p2haKbAAOVkeYPjxwgBGzc'/>
           <p>Information About the project be added</p>
        </div>
        <footer className='footer'>
            <a>Shaik</a>
            <a>Triane</a>
        </footer>
        </main>
    );
};

