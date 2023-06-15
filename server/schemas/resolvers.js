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
    }
};

module.exports = resolvers;