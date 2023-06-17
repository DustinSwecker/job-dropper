import React from "react";
import { Link } from "react-router-dom";
import image from '../../images/job_dropper_logo.png'
import './home.css'
// import  {Navbar,Nav} from "react-bootstrap";
// import Login from '../Login';
// import Auth from '../../utils/auth'

function Home(){

    // const logout = (event) => {
    //     event.preventDefault();
    //      Auth.logout();
    //   };


    return(
        <>
        <div className="containter-fluid d-flex">
          

     <div className='d-flex flex-row  h-100 justify-content-between'> 
      {/* Use Link component to create a link that returns to the homepage on click */}
      <Link  to='/'> 
      <img id = "logo" src={image}></img> 
     
        </Link>          
     </div>
     </div>
    
     {/* <div className="container flex-column justify-space-between-lg "> */}
                <h2 className="mx-2"> Let's Grow Together</h2>
                <Link to = "/">
                    <button id="drop" type='button' className='btn btn-info mx-5'>Drop a job</button>
                </Link>
                


          <div className='mx-3 d-flex justify-right' >
          
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/signup">
                Signup
              </Link>
         
        </div>
     
     
      </>
         



  
    )
}
export default Home;