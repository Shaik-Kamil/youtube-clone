import React from "react";
import './PageNotFound.css'



export default function PageNotFound () {
    
    return (
       <div className="notFound">
       <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" width='300' height='300' />
       <h1>Error 404 - Page Not Found</h1>
       <p>The Page You are Looking for Doesn't Exist</p>
       </div>
    );
  }