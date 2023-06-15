import {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import { GET_JOBS } from '../../utils/queries';


const Listing = () => {
    const {loading, data} = useQuery(GET_JOBS);
    const jobs = data?.jobs || [];
  
    return (<div>
        { loading?
         <div>
            Loading users....
        </div>: 
        <div>             
        { jobs[0]?.link }
        { jobs[1].title }
        </div>}
        </div>
)}            

    

export default Listing;