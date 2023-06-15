import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Html = () => {
    return (
        <Chip  className="chips"    
          icon={
            <MDBIcon 
        fab
        icon="html5"/>
        }
        label="HTML"/>
    )
}

export default Html;