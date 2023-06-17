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
                <div>
                  <Card.Link className="showCommentBtn" href="#">Show Comments</Card.Link>{' '}
                  <Card.Text className="createdAtTxt text-muted"> Job posted on {job.createdAt}</Card.Text>
                </div>
              </Card.Body>
              <Card.Footer>
              {job.comments.map((comment, j) => (
                <Card key={j}>
                    <Card.Text className="m-0 pt-1 fst-italic">"{comment.commentBody}" - {comment.username}</Card.Text>
                    <Card.Text className="commentCreateTxt text-muted pb-1">{comment.createdAt}</Card.Text>
                </Card>
              ))}
              </Card.Footer>
            </Card>
              ))}
           </div>
    
          </div>
        }   
      </div>
)}            
    

export default Listing;