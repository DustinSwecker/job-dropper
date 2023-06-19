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
    skills: []
  });

  const [addJob, { error, data }] = useMutation(ADD_JOB);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setJobInfo ({ ...jobInfo, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addJob({
        variables: {
          ...jobInfo
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
    <form onSubmit={handleSubmit}>
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

      <div key={`inline-checkbox`} className="mb-3">
        <Form.Check inline label="Angular" name="skills" type="checkbox" value="Angular" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="AWS" name="skills" type="checkbox" value="AWS" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="Bootstrap" name="skills" type="checkbox" value="Bootstrap" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="C+" name="skills" type="checkbox" value="C+" id={`inline-checkbox-1`} onChange={handleInputChange}/>                           
        <Form.Check inline label="CSS" name="skills" type="checkbox" value="JavaScript" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="espress.js" name="skills" type="checkbox" value="espress.js" id={`inline-checkbox-1`} onChange={handleInputChange}/>      
        <Form.Check inline label="github" name="skills" type="checkbox" value="github" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="graphql" name="skills" type="checkbox" value="graphql" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="HTML" name="skills" type="checkbox" value="HTML" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="Java" name="skills" type="checkbox" value="Java" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="JavaScript" name="skills" type="checkbox" value="JavaScript" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="MongoDB" name="skills" type="checkbox" value="MongoDB" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="MYSQL" name="skills" type="checkbox" value="MYSQL" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="node.js" name="skills" type="checkbox" value="node.js" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="python" name="skills" type="checkbox" value="python" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="React" name="skills" type="checkbox" value="React" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="Rust" name="skills" type="checkbox" value="Rust" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="SQL" name="skills" type="checkbox" value="SQL" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="Vue" name="skills" type="checkbox" value="Vue" id={`inline-checkbox-1`} onChange={handleInputChange}/>
        <Form.Check inline label="Wordpress" name="skills" type="checkbox" value="Wordpress" id={`inline-checkbox-1`} onChange={handleInputChange}/>
  
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )}
  </div>

  );
};

export default JobForm;
