import React, {useState} from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from 'react-router-dom'
import './Login.css'
 //I'm proud of this TBH 
export default function Login(props){
    const [toggle, setToggle] = useLocalStorage('toggle' ? 'dark' : 'light')
    //Dark Mode but doesn't last all pages. We should fix later
    const history = useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: ""});
    //Made For EMail auth

    function changeMode(){
        const theme = toggle === 'light' ? 'dark' : 'light'
        setToggle(theme)
    }
    //Function to change toggle. Future code should make it slide can be done with CSS but I'm sleepy

    props.funcNavi(false)
    //This is hiding the Nav Bar

    function checkMe(checkbox){
     if(checkbox){
        document.getElementById("submit").removeAttribute("disabled");
     }else{
        document.getElementById("submit").setAttribute("disabled", "disabled");
     }
    }
    //function to toggle memory option 
    return(
       
        <div className="signUp" data-theme={toggle}>
        <div className='login'>
          <h1>Login</h1>
          <div className='container'>
            <div className='top'>
                <i class='fab fa-linkedin'></i>
                <i class='fab fa-github'></i>
                <i class='fab fa-facebook'></i>
                <i class='fab fa-google'></i>
            {/* These Are Not currently clickable but I think I can do it with Back End. */}
            </div>
            <p className='divider'><span>Or</span></p>
            <form>
              <label>E-mail</label>
              <input 
              type='email' 
              placeholder='Enter your email'
              value={credentials.email}
              onChange={event => setCredentials({email: event.target.value, password: credentials.password})}
              required
              />
              <label>Password</label>
              <input 
              type='password' 
              placeholder='Enter your password' 
              value={credentials.password}
              onChange={event => setCredentials({email: credentials.email, password: event.target.value})}
              required
              />
              <div className='remember'>
                <input 
                type='checkbox' 
                onChange={checkMe}
                />
                <p>Remember Me</p>
             {/* Use history is remembering no matter what BUT can be changed later */}
              </div>
              <button
               disabled={ !(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(credentials.email)) }
               onClick={(e)=>{
                 e.preventDefault();
                 if (credentials.password === "")
                   history.push("/home");
                   history('/home')
                   props.funcNavi(true)
                 //Needed to make Nav appear after push
                 setCredentials({
                    email: "", password: ""
                 })

               }}
              >Log In</button>
            </form>
            <div className='bottom'>
              <p>Forget your password?</p>
              <a href='/'>Reset Password</a>
            </div>
            <p className='create'>Create Account</p>
          </div>
          <div className='theme-toggle'>
            <h2>Light Theme</h2>
            <i onClick={changeMode} class='fas fa-toggle-on'></i>
           {/* Future code should make toggle travel with user */}
          </div>
        </div>
      </div>
    )
}

