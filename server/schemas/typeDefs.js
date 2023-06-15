const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        comments: [String]
        jobs: [String]
    }

    type Job {
        _id: ID!
        title: String
        description: String!
        link: String!
        skills: [String]
        createdAt: String
        comments: [String]
    }

    type Query {
        users: [User]
        jobs: [Job]
        job(jobId: ID!): Job
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User 
        addJob(description: String!, link: String!): Job
        updateJob(jobId: ID!, title: String, description: String, link: String, skills: String, comments: String): Job
        removeJob(jobId: ID!): Job
    }
`


module.exports = typeDefs;