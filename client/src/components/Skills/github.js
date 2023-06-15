import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Github = () => {
    return (
        <Chip className="chips"     
          icon={
            <MDBIcon 
        fab
        icon="github"/>
        }
        label="GitHub"/>
    )
}

export default Github;