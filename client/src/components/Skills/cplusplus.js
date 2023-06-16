import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Cplus = () => {
    return (
        <Chip className="chips" component="a" href="https://www.learncpp.com/" target="_blank" clickable       
          icon={ 
            <MDBIcon 
        fab
        icon="cuttlefish"/>
        }
        label="++"/>
    )
}

export default Cplus;