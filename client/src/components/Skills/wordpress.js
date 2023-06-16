import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Wordpress = () => {
    return (
        <Chip className="chips" component="a" href="https://wordpress.com/learn/" target="_blank"      
          icon={
            <MDBIcon 
        fab
        icon="wordpress"/>
        }
        label="Wordpress"/>
    )
}

export default Wordpress;