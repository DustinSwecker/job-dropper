import { gql } from '@apollo/client';


export const ADD_JOB = gql`
    mutation addJob($description: String!, $link: String!) {
        addJob(description: $description, link: $link) {
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

export const UPDATE_JOB = gql`
    mutation Mutation($jobId: ID!, $description: String, $link: String) {
        updateJob(jobId: $jobId, description: $description, link: $link) {
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

export const REMOVE_JOB = gql`
    mutation removeJob($jobId: ID!) {
        removeJob(jobId: $jobId) {
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
export const UPDATE_USER = gql` mutation Mutation($userId: ID!, $email: String!, $password: String!) {
  updateUser(userId: $userId, email: $email, password: $password) {
    comments
    jobs
    username    
  }
}`

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    jobs
    comments
    username
  }
}`

export const DEL_USER = gql`
mutation Mutation($userId: ID!) {
    deleteUser(userId: $userId) {
      _id
    }
  }`

