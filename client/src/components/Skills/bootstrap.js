import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Bootstrap = () => {
    return (
        <Chip className="chips" component="a" href="https://www.w3schools.com/bootstrap5/" target="_blank" clickable       
          icon={
            <MDBIcon 
        fab
        icon="bootstrap"/>
        }
        label="Bootstrap"/>
    )
}

export default Bootstrap;