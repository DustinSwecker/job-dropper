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
`
export const GET_SINGLE_USER = gql`
query SingleUser($userId: ID!) {
  singleUser(userId: $userId) {
    _id
    comments
    jobs
    username
  }
}`
