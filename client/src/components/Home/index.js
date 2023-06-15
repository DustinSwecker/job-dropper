import React from "react";
import {Link } from "react-router-dom";


function Home(){
    return(
        <div className="containter-fluid d-flex">
            
                {/* <h2 className="card-title">Hello!!!</h2>*/}
                <h2> Let's Grow Together</h2>
                <Link to = "/">
                    <button type='button' className='btn btn-info'>Post a Job Here!!</button>
                </Link>
            
          </div> 
    )
}
export default Home;