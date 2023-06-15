const { AuthenticationError } = require('apollo-server-express');
const { User, Job } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        singleUser: async(parent, args) => {
            return await User.findOne({ _id: args.userId })
        },
    },
    Mutation: {
        addUser: async(_, args) => {
            const userData = await User.create(args);
            return userData;
        },
        updateUser: async(_, args) => {
            const updateUserData = await User.findOneAndUpdate({
                _id: args.userId
            },
            {
                $set: args
            },
            {
                runValidators: true,
                new: true
            });
            console.log(updateUserData)
            if (!updateUserData) {
                res.status(404).json({ message: 'no user with that ID'})
            }
            return updateUserData;
        },
        deleteUser: async (_,args) => {
            await User.findOneAndDelete({
                _id: args.userId
            });
         
            return null
        }
    }
};

module.exports = resolvers;