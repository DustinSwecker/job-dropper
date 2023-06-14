import {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import { GET_USER } from '../../utils/queries';


const JobBoard = () => {
    const {loading, data} = useQuery(GET_USER);
    const users = data?.users || [];
    console.log(data);
    return (<div>
        { loading?
         <div>
            Loading users....
        </div>: 
        <div>             
        { users[0].username }
        </div>}
        </div>
)}            

    

export default JobBoard;
