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
   

    type Query {
        users: [User]
        singleUser(userId: ID!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        updateUser(userId: ID!, email: String!, password: String!): User
        deleteUser(userId: ID!): User
    }
`


module.exports = typeDefs;