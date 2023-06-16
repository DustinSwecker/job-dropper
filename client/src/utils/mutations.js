import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user{
        _id
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signupUser($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
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


export const ADD_JOB = gql`
    mutation addJob($title: String, $description: String!, $company: String, $location: String, $link: String!, $Skills: String) {
        addJob(title: $title, description: $description, company: $company, location: $location, link: $link, skills: $skills) {
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

export const UPDATE_JOB = gql`
    mutation updateJob($jobId: ID!, $title: String, $description: String, $company: String, $location: String,  $link: String, $skills: String) {
        updateJob(jobId: $jobId, title: $title, description: $description, company: $company, location: $location, link: $link, skills: $skills) {
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

export const REMOVE_JOB = gql`
    mutation removeJob($jobId: ID!) {
        removeJob(jobId: $jobId) {
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

export const ADD_COMMENT = gql`
    mutation addComment($jobId: ID!, $commentBody: String!, $username: String) {
        addComment(jobId: $jobId, commentBody: $commentBody, username: $username) {
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

export const REMOVE_COMMENT = gql`
    mutation removeComment($jobId: ID!, $commentId: ID!) {
        removeComment(jobId: $jobId, commentId: $commentID) {
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

