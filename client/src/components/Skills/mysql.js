import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const MySql = () => {
    return (
        <Chip id = "fontsaredumb" className="chips"     
          icon={
            <MDBIcon 
        fab
        icon="database"/>
        }
        label="MySQL"/>
    )
}

export default MySql;