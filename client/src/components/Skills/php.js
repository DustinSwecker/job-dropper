import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const PHP = () => {
    return (
        <Chip className="chips" component="a" href="https://www.learn-php.org/" target="_blank"   
          icon={
            <MDBIcon 
        fab
        icon="php"/>
        }
        label="PHP"/>
    )
}

export default PHP;