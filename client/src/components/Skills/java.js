import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Java = () => {
    return (
        <Chip  className="chips"    
          icon={
            <MDBIcon 
        fab
        icon="java"/>
        }
        label="Java"/>
    )
}

export default Java;