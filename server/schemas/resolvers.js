const { AuthenticationError } = require('apollo-server-express');
const { User, Job } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        }
    },
    Mutation: {
        addUser: async(_, args) => {
            const userData = await User.create(args);

            return userData;
        }
    }
};

module.exports = resolvers;