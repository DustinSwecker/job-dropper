import { gql } from '@apollo/client';

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

