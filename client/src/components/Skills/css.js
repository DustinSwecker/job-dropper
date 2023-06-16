import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const CSS = () => {
    return (
        <Chip className="chips" component="a" href="https://web.dev/learn/css/" target="_blank" clickable      
          icon={
            <MDBIcon 
        fab
        icon="css3"/>
        }
        label="CSS"/>
    )
}

export default CSS;