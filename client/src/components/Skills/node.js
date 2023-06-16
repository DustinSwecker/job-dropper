import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const NodeJS = () => {
    return (
        <Chip  className="chips" component="a" href="https://nodejs.dev/en/learn/" target="_blank"     
          icon={
            <MDBIcon 
        fab
        icon="node-js"/>
        }
        label="Node"/>
    )
}

export default NodeJS;