import "./listing.css"
import {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import { GET_JOBS } from '../../utils/queries';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';


const Listing = () => {
    const {loading, data} = useQuery(GET_JOBS);
    const jobs = data?.jobs || [];

    return (
      <div>
        { loading?
          <div>
            Loading job listings....
          </div>: 
          <div> 
            {jobs.map((job, i) => (      
            <Card key={i} className="col-8 mx-auto mb-4">
              <Card.Header>
                <Chip icon={ <MDBIcon fab icon="css3"/>} label="CSS"/>
                <Chip icon={ <MDBIcon fab icon="bootstrap"/> }  label="Bootstrap"/>
              </Card.Header>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tech Builders, Inc.</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Atlanta, GA</Card.Subtitle>
                <Card.Text>"{job.description}"</Card.Text>
                <Button variant="primary" id="applyBtn" href={`//${job.link}`} target="_blank">Apply Here!</Button>{' '}
                <Button variant="primary" id="applyBtn" href={`//${job.link}`} target="_blank">Comment</Button>{' '}
              </Card.Body>
              <Card.Footer className="text-muted"> This job was posted on {job.createdAt}</Card.Footer>
            </Card>
              ))}
          </div>
        }   
      </div>
)}            
    

export default Listing;