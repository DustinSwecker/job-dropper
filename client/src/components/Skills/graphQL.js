import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const GraphQL = () => {
    return (
        <Chip component="a" href="https://www.apollographql.com/tutorials/browse" target="_blank" className="chips"     
          icon={
            <MDBIcon 
        fab
        icon="battle-net"/>
        }
        label="GraphQL"/>
    )
}

export default GraphQL;