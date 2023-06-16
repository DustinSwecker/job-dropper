import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Express = () => {
    return (
        <Chip className="chips" component="a" href="https://www.codecademy.com/learn/learn-express" target="_blank" clickable         
        label="Express.js"/>
    )
}

export default Express;