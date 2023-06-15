import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const AWS = () => {
    return (
        <Chip className="chips"        
          icon={
            <MDBIcon 
        fab
        icon="aws"/>
        }
        label="AWS"/>
    )
}

export default AWS;