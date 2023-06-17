import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Python = () => {
    return (
            <Chip className="chips" component="a" href="https://www.learnpython.org/" target="_blank"
                icon={
                    <MDBIcon
                fab
                icon="python"/>
                }
                label="Python"/>
    )
}

export default Python;