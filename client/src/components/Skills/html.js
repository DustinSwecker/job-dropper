import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Html = () => {
    return (
        <Chip  className="chips" component="a" href="https://www.w3schools.com/html/" target="_blank"   
          icon={
            <MDBIcon 
        fab
        icon="html5"/>
        }
        label="HTML"/>
    )
}

export default Html;