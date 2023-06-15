import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const JavaScript = () => {
    return (
        <Chip className="chips"      
          icon={
            <MDBIcon 
        fab
        icon="js"/>
        }
        label="JavaScript"/>
    )
}

export default JavaScript;