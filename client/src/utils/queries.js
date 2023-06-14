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
`
