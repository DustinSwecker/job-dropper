import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'

function Home(){

    const logout = (event) => {
        event.preventDefault();
         Auth.logout();
      };


    return(
        
      <div className="containter-fluid d-flex">

     <div className='d-flex flex-row h-100 justify-content-between'> 
      {/* Use Link component to create a link that returns to the homepage on click */}
      <Link  to='/'>  
     <h4 className="m-0"> JOB DROPPER </h4>
        </Link>          
     </div>
     
    
     {/* <div className="container flex-column justify-space-between-lg "> */}
                <h2> Let's Grow Together</h2>
                <Link to = "/">
                    <button type='button' className='btn btn-info'>Post a Job Here!!</button>
                </Link>
                
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



  
    );
};
export default Home;