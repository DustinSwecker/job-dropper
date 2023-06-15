import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const GraphQL = () => {
    return (
        <Chip id = "fontsaredumb" className="chips"     
          icon={
            <MDBIcon 
        fab
        icon="battle-net"/>
        }
        label="GraphQL"/>
    )
}

export default GraphQL;