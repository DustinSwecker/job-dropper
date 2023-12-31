import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import image from '../../images/job_dropper_logo.png'
import { MDBIcon } from "mdb-react-ui-kit";
import './header.css'
// import  {Navbar,Nav} from "react-bootstrap";
// import Login from '../Login';
// import Auth from '../../utils/auth'

import Auth from '../../utils/auth';

function Header(){
  const [active, setActive] = useState(false);
  function addBeat(e) {
    setActive(true);
    e.target.children.style = "--fa-beat-scale: 2.0"
  }
  function removeBeat(e) {
    setActive(false);
  }

    const logout = (event) => {
        event.preventDefault();
         Auth.logout();
      };


    return (
      <div id="navheader" className="containter-fluid d-flex">
        <div className='d-flex flex-row h-100 justify-content-between'> 
      {/* Use Link component to create a link that returns to the homepage on click */}
        <Link  to='/'> 
        <img className="mx-5 my-1" id = "logo" src={image}></img>
        </Link>          
     </div>
     
    
     {/* <div className="container flex-column justify-space-between-lg "> */}
                <h2 id = "navmessage"className="mx-2"> Let's Grow Together</h2>
                <Link to = "/pageform">
                    <button id="drop" type='button' className='btn btn-info mx-5'> <i onMouseOver = {addBeat}  onMouseOut = {removeBeat} className={active ? "fa-beat fas fa-fill-drip" : "fas fa-fill-drip" }></i> Drop a job </button>
                </Link>
                <Link to = "/listing">
        <button style={{width: "fit-content"}} type='button' className='btn btn-info'> <i className="fa-solid fa-newspaper"></i> See the Listings! </button>
        </Link>
                



          <div className='mx-3 d-flex justify-right' >
          

          <div>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>

              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/signup">
                Signup
              </Link>
           </>
          )}
        </div>
      
         </div>
         </div>

      
  
    );
};
export default Header;