import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Rust = () => {
    return (
            <Chip className="chips"
                icon={
                    <MDBIcon
                fab
                icon="rust"/>
                }
                label="Rust"/>
    )
}

export default Rust;