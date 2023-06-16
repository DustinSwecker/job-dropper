const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        comments: [String]
        jobs: [String]
    }

    type Auth {
        token: ID!
        user: User
      }
   

    type Job {
        _id: ID!
        title: String
        description: String!
        company: String
        location: String
        link: String!
        skills: [String]
        createdAt: String
        comments: [Comment]
    }

    type Comment {
        _id: ID!
        commentBody: String!
        username: String
        createdAt: String
    }

    type Query {
        users: [User]
        singleUser(userId: ID!): User
        jobs: [Job]
        job(jobId: ID!): Job
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!):User
        login(email: String!, password: String!):Auth
        signupUser(username: String!, email: String!, password: String!):Auth

        updateUser(userId: ID!, email: String!, password: String!): User
        deleteUser(userId: ID!): User

        addJob(title: String, description: String!, company: String, location: String, link: String!, skills: String!): Job
        updateJob(jobId: ID!, title: String, description: String, company: String, location: String, link: String, skills: String): Job
        removeJob(jobId: ID!): Job
        
        addComment(jobId: ID!, commentBody: String!, username: String): Job
        removeComment(jobId: ID!, commentId: ID!): Job
    }`


module.exports = typeDefs;