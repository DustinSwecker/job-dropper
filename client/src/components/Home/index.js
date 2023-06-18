import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function Home () {
    return (<div><Container fluid className="m-5">
    <Card>
      <Row className="m-5">
        <Col xs={12} md={8}>
        <Card.Body>
        <Card.Title>Why Job Dropper?</Card.Title>
        <br></br>
        <Card.Text>
          Because social networking sites are too formal! They take too long, require too much information! 
          <br></br>
          <br></br>
          
          They're too focused on attracting business interests and not just serving the public and the social needs of those looking for jobs!
          <br></br>
          <br></br>

          This is a site for people who want to help their friends! For job searchers to see curated lists of jobs shared by buddies!
          <br></br>
          <br></br>

          We want to make job search social in a way it hasn't been done before. So what's stopping you? Go ahead and find a new job!
        </Card.Text>
        <Link to = "/listing">
        <button style={{width: "fit-content"}} type='button' className='btn btn-info'> <i class="fa-solid fa-newspaper"></i> See the Listings! </button>
        </Link>
        </Card.Body>
        </Col>
        <Col>
        <Card.Img style={{width: 'fit-content', height: '400px', }} src="https://plus.unsplash.com/premium_photo-1679936310859-bb50897c4c89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGpvYiUyMHNlZWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
      
      </Col>
      </Row>
      
    </Card>
    </Container>
    <Container fluid className="m-5">
    <Card>
      <Row className="m-5">
      <Col xs={12}>
        <Card.Img className="m-5" style={{width: 'fit-content', textAlign: 'center', height: '300px'}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IK_vt23gFFEvlLLaGvPoyQHaEK%26pid%3DApi&f=1&ipt=eb012a5aa9812de609632193bfce1234586127a8e004748cf7da253da21fd396&ipo=images" />
      
      </Col>
        <Col xs={12} md={12}>
        <Card.Body>
        <Card.Title>Found a great job? Awesome! Drop it!</Card.Title>
        <br></br>
        <Card.Text>
          Job posts at Job Dropper are quick and easy! Just fill out the a few quick, easy, peasy form fields and Job Dropper will notify your friends of the sweet new gig you've found!
          <br></br>
          <br></br>
          Additionally, click on any required skill in the listings and it'll take you or your friend to the training you need! What's better than that?
          <br></br>
          <br></br>


          So quit reading and just Drop it!
          <br></br>
          <br></br>

          
        </Card.Text>
        <Link to = "/pageform">
        <button style={{width: "fit-content"}} id="drop" type='button' className='btn btn-info'> <i className="fa-beat fas fa-fill-drip" ></i> Drop a job </button>
        </Link>
        </Card.Body>
        </Col>
  
      </Row>
      
    </Card>
    </Container>
    </div>
    )
}

export default Home;