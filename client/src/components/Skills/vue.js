import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Vue = () => {
    return (
            <Chip className="chips"
                icon={
                    <MDBIcon
                fab
                icon="vuejs"/>
                }
                label="Vue.js"/>
    )
}

export default Vue;