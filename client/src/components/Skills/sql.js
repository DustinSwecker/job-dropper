import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const SQL = () => {
    return (
        <Chip         
          icon={
            <MDBIcon 
        fab
        icon="database"/>
        }
        label="SQL"/>
    )
}

export default SQL;