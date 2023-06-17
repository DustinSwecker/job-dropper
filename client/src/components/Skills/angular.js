import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Angular = () => {
    return (
        <Chip label="Angular" component="a" href="https://angular.io/tutorial" target="_blank" clickable className="chips"        
          icon={
            <MDBIcon 
        fab
        icon="angular"/>
        }/>
    )
}

export default Angular;