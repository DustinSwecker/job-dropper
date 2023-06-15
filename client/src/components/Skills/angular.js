import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Angular = () => {
    return (
        <Chip className="chips"        
          icon={
            <MDBIcon 
        fab
        icon="angular"/>
        }
        label="Angular"/>
    )
}

export default Angular;