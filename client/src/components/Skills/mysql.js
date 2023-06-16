import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const MySql = () => {
    return (
        <Chip component="a" href="https://www.mysqltutorial.org/" target="_blank" className="chips"     
          icon={
            <MDBIcon 
        fab
        icon="database"/>
        }
        label="MySQL"/>
    )
}

export default MySql;