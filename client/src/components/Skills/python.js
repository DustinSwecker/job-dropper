import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Python = () => {
    return (
            <Chip className="chips"
                icon={
                    <MDBIcon
                fab
                icon="python"/>
                }
                label="Python"/>
    )
}

export default Python;