import React from 'react';
import { Link } from "react-router-dom";

const moveToLink = id => document.getElementById(id).scrollIntoView(true);

const Landing = () => (
  <div className="text-center py-5 resume-home-landing-container" >
  <div className="container">
    <div className="row my-5 justify-content-center">
      <div className="col-md-9">
        <h1 className="resume-home-landing-title font-weight-bold">Welcome to our Resume Builder!</h1>
        <p className="lead text-white">You can create a resume using one of our templates.</p>

        <a onClick={() => moveToLink('resume-templates')}   className="btn btn-primary m-2 shadow">Create Resume</a> 

      
        
        {/* <Link to="/form">          
          <a href="#" className="btn btn-primary m-2 shadow">Create Resume</a> 
        </Link> */}
        <Link to="/templates">          
          <a href="#" className="btn btn-primary m-2 shadow">View Saved Resumes</a>
        </Link>

      </div>
    </div>
  </div>
</div>
)

export default Landing;