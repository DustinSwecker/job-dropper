import {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import { GET_USERS } from '../../utils/queries';


const JobBoard = () => {
    const {loading, data} = useQuery(GET_USERS);
    const users = data?.users || [];
    console.log(data)
    console.log(users)
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
