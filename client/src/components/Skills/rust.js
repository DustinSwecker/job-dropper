import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Rust = () => {
    return (
            <Chip className="chips" component="a" href="https://www.rust-lang.org/learn" target="_blank"
                icon={
                    <MDBIcon
                fab
                icon="rust"/>
                }
                label="Rust"/>
    )
}

export default Rust;