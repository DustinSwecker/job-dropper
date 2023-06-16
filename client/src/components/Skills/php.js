import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const PHP = () => {
    return (
        <Chip className="chips"     
          icon={
            <MDBIcon 
        fab
        icon="php"/>
        }
        label="PHP"/>
    )
}

export default PHP;