import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const NodeJS = () => {
    return (
        <Chip  className="chips"       
          icon={
            <MDBIcon 
        fab
        icon="node-js"/>
        }
        label="Node"/>
    )
}

export default NodeJS;