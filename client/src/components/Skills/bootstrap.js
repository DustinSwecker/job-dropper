import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Bootstrap = () => {
    return (
        <Chip className="chips"        
          icon={
            <MDBIcon 
        fab
        icon="bootstrap"/>
        }
        label="Bootstrap"/>
    )
}

export default Bootstrap;