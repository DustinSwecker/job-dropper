import "./listing.css"
import {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations'
import { GET_JOBS } from '../../utils/queries';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import { getHref, getLabel, getIcon } from "../Skills/skills";
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';
import Collapse from 'react-bootstrap/Collapse';



const Listing = ({username}) => {
    const {loading, data} = useQuery(GET_JOBS);
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleSubmit = async (e) => {
      
      e.preventDefault();
      try {
        const data = await addComment({
          variables: { comment, username },
        });
  
        setComment('');
      } catch (err) {
        console.error(err);
      }
      setComment(' ');
    };
 
    const jobs = data?.jobs || [];
    const jobsSkills = jobs.map((job, i)=> jobs[i].skills)
    
    
    return (
      <div id = "main">
        { loading?
          <div>
            Loading job listings....
          </div>: 
          
          
          
          <div>

            <h2 className="my-5">Recent Job Postings:</h2>
           
            
            {jobs.map((job, i) => (      
            <Card key={i} className="col-8 mx-auto mb-4">


              <Card.Body>
         
              <Row>
              <Col className="my-5"xs = {3}>
                  <h6>Required Skills:</h6>
                  <Stack justifyContent="center" alignItems="center" spacing = {1}>
                  {jobsSkills[i].map((skill)=> (
                    <Chip className="chips" component="a" href={getHref(skill)} target="_blank" icon= {<MDBIcon fab icon={getIcon(skill)}/>} label={getLabel(skill)}/>
                  ))}
                  </Stack>
                  </Col>
                  <Col xs = {8}>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tech Builders, Inc.</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Atlanta, GA</Card.Subtitle>
                <Card.Text>"{job.description}"</Card.Text>
                <Button variant="primary" id="applyBtn" href={`//${job.link}`} target="_blank">Apply Here!</Button>{' '}
                <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Add a Comment!
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="collapse-form">
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="addComment">
        <Form.Label>Add a Comment</Form.Label>
        <Form.Control type="text" placeholder="comment..." />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </div>
        </Collapse>
        </div>

                </Col>
                </Row>

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
      }
    </div>
)}

                       
    

export default Listing;