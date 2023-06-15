import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getUser {
        users {
        comments
        jobs
        email
        password
        username
    }
  }
`;

export const GET_JOBS = gql`
  query getJobs {
    jobs {
      _id
      title
      description  
      link
      createdAt
      skills
      comments
    }
  }
`;

export const GET_SINGLE_JOB = gql`
  query getSingleJob ($jobId: ID!) {
    job (jobID: $jobId) {
      _id
      title
      description  
      link
      createdAt
      skills
      comments
    }
  }
`;

