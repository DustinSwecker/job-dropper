import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const Vue = () => {
    return (
            <Chip className="chips" component="a" href="https://vuejs.org/guide/introduction.html" target="_blank"
                icon={
                    <MDBIcon
                fab
                icon="vuejs"/>
                }
                label="Vue.js"/>
    )
}

export default Vue;