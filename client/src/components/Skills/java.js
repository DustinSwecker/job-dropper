import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Java = () => {
    return (
        <Chip  className="chips" component="a" href="https://www.learnjavaonline.org/" target="_blank"   
          icon={
            <MDBIcon 
        fab
        icon="java"/>
        }
        label="Java"/>
    )
}

export default Java;