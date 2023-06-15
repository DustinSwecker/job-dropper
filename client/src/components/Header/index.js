import React, { useState } from 'react';
// import { useQuery, useMutation } from '@apollo/client';
// import {GET_USER} from '../../utils/queries'
import {Route} from 'react-router-dom'
import Home from '../Home';

import { Link } from 'react-router-dom';


import Container from 'react-bootstrap/container'
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return(
    
    
        // <div className='d-flex flex-row  h-100 justify-content-between'>
        // {/* Use Link component to create a link that returns to the homepage on click */}
        // {/* <Link  to='/'>  */}
        // <h4 className="m-0"> JOB DROPPER </h4>
        //  {/* </Link>          */}
        // </div>
        
        
          
          <Route
            path = "/"
            element = {<Home />}
            />
          
          
        
          
        

)            
};

export default Header;