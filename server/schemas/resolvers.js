const { AuthenticationError } = require('apollo-server-express');
const { User, Job } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },

        jobs: async () => {
            return await Job.find();
        },
        job: async (parent, { jobId }) => {
            return await Job.findOne({ _id: jobId });
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

        addJob: async(_, args) => {
            const jobData = await Job.create(args);

            return jobData;
        },
        updateJob: async(_, { jobId, title, description, link, skills, comments }) => {
             const jobData = await Job.findOneAndUpdate(
                { _id: jobId }, 
                {$set:{ title:title, description: description, link:link, skills: skills, comments:comments }},
                {new: true});

            return jobData;
         },
        removeJob: async(_, { jobId }) => {
            const jobData = await Job.findOneAndDelete({ _id: jobId });

            return jobData;
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