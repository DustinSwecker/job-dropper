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
