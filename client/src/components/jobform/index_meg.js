import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";

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
        Success! You may now head{' '}
        <Link to="/listing">back to the homepage.</Link>
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
          />
      </div>

      <div className="form-group">
        <label htmlFor="skills">Skills</label>
        <input
          type="text"
          name="skills"
          id="skills"
          value={jobInfo.skills}
          onChange={handleInputChange}
          />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )}
  </div>

  );
};

export default JobForm;
