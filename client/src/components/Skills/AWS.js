import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const AWS = () => {
    return (
        <Chip className="chips" component="a" href="https://www.aws.training/" target="_blank" clickable      
          icon={
            <MDBIcon 
        fab
        icon="aws"/>
        }
        label="AWS"/>
    )
}

export default AWS;