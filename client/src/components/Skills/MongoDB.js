import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const MongoDB = () => {
    return (
        <Chip className="chips"     
          icon={
            <MDBIcon 
        fab
        icon="envira"/>
        }
        label="MongoDB"/>
    )
}

export default MongoDB;