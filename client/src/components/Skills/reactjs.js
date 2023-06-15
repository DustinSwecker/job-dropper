import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const ReactJS = () => {
    return (
            <Chip className="chips"
                icon={
                    <MDBIcon
                fab
                icon="react"/>
                }
                label="React"/>
    )
}

export default ReactJS;
