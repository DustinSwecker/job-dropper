import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

import { ADD_JOB } from '../../utils/mutations';


const JobForm = () => {

  const [jobInfo, setJobInfo] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    link: '',
    skills:[]
  });

  const [addJob, { error, data }] = useMutation(ADD_JOB);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setJobInfo ({ ...jobInfo, [name]: value });
  }

  const [skillsArray, setSkillsArray] = useState({
    skills: []
  });
  
  const handleInputChange2 = (e) => {
    const { value, checked } = e.target;
    const { skills } = skillsArray;
      
    // console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setSkillsArray({
        skills: [...skills, value]
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setSkillsArray({
        skills: skills.filter((e) => e !== value)
      });
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addJob({
        variables: {
          title: jobInfo.title,
          description: jobInfo.description,
          company: jobInfo.company,
          location: jobInfo.location,
          link: jobInfo.link,
          skills: skillsArray.skills
        }
    })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {data ? (
      <p>
        Success! Thank you for dropping a job!{' '}
        <Link to="/listing">Return to the homepage.</Link>
      </p>
    ) : (
    <Form onSubmit={handleSubmit} className="col-6 mx-auto mb-4">
      <div className="form-group">
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={jobInfo.title}
          onChange={handleInputChange}
          />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={jobInfo.description}
          onChange={handleInputChange}
          required/>
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          value={jobInfo.company}
          onChange={handleInputChange}
          />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={jobInfo.location}
          onChange={handleInputChange}
          />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input
          type="text"
          name="link"
          id="link"
          value={jobInfo.link}
          onChange={handleInputChange}
          required/>
      </div>
      <br/>
      <div key={`inline-checkbox`} className="mb-3">
        <Form.Check inline label="Angular" name="skills" type="checkbox" value="Angular" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="AWS" name="skills" type="checkbox" value="AWS" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="Bootstrap" name="skills" type="checkbox" value="Bootstrap" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="C++" name="skills" type="checkbox" value="cplus" id={`inline-checkbox-1`} onChange={handleInputChange2}/>                           
        <Form.Check inline label="CSS" name="skills" type="checkbox" value="CSS" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="espress.js" name="skills" type="checkbox" value="espress.js" id={`inline-checkbox-1`} onChange={handleInputChange2}/>      
        <Form.Check inline label="github" name="skills" type="checkbox" value="github" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="graphql" name="skills" type="checkbox" value="graphql" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="HTML" name="skills" type="checkbox" value="HTML" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="Java" name="skills" type="checkbox" value="Java" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="JavaScript" name="skills" type="checkbox" value="JavaScript" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="MongoDB" name="skills" type="checkbox" value="MongoDB" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="MYSQL" name="skills" type="checkbox" value="MYSQL" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="node.js" name="skills" type="checkbox" value="node.js" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="python" name="skills" type="checkbox" value="python" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="React" name="skills" type="checkbox" value="React" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="Rust" name="skills" type="checkbox" value="Rust" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="SQL" name="skills" type="checkbox" value="SQL" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="Vue" name="skills" type="checkbox" value="Vue" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
        <Form.Check inline label="Wordpress" name="skills" type="checkbox" value="Wordpress" id={`inline-checkbox-1`} onChange={handleInputChange2}/>
  
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
      
    </Form>
  )}
  </div>

  );
};

export default JobForm;
