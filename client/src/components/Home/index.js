import React from "react";
import { Link } from "react-router-dom";


function Home(){
    return(
        <div className="containter-fluid d-flex">

 <div className='d-flex flex-row  h-100 justify-content-between'> 
      {/* Use Link component to create a link that returns to the homepage on click */}
      <Link  to='/'>  
     <h4 className="m-0"> JOB DROPPER </h4>
        </Link>          
     </div>

    
                 {/* <h2 className="card-title">Hello!!!</h2>*/}
                <h2> Let's Grow Together</h2>
                <Link to = "/">
                    <button type='button' className='btn btn-info'>Post a Job Here!!</button>
                </Link>
            
          </div> 



  
    )
}
export default Home;