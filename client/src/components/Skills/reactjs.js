import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const ReactJS = () => {
    return (
            <Chip className="chips" component="a" href="https://www.codecademy.com/learn/react-101" target="_blank"
                icon={
                    <MDBIcon
                fab
                icon="react"/>
                }
                label="React"/>
    )
}

export default ReactJS;
