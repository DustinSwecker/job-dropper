import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query getUsers {
        users {
        _id
        comments
        jobs        
        username
    }
  }
`;

export const GET_SINGLE_USER = gql`
query SingleUser($userId: ID!) {
  singleUser(userId: $userId) {
    _id
    comments
    jobs
    username
  }
}`

export const GET_JOBS = gql`
  query getJobs {
    jobs {
      _id
      title
      description
      company
      location
      link
      skills
      createdAt
      comments {
        _id
        commentBody
        username
        createdAt
      }
    }
}
`;

export const GET_SINGLE_JOB = gql`
  query getSingleJob ($jobId: ID!) {
    job (jobID: $jobId) {
      _id
      title
      description
      company
      location
      link
      skills
      createdAt
      comments {
        _id
        commentBody
        username
        createdAt
      }
    }
}
`;
