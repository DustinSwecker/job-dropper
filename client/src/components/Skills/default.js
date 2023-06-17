import "./skills.css"
import Chip from '@mui/material/Chip';

const Default = (skills) => {
    return (
        <Chip className="chips" component="a" href="https://www.coursera.org/courses?query=programming%20languages" target="_blank" clickable label={skills}/>
    )
}

export default Default;