import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Cplus = () => {
    return (
        <Chip className="chips"        
          icon={ 
            <MDBIcon 
        fab
        icon="cuttlefish"/>
        }
        label="++"/>
    )
}

export default Cplus;