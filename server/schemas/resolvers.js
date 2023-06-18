const { AuthenticationError } = require('apollo-server-express');
const { User, Job } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },

        singleUser: async(parent, args) => {
            return await User.findOne({ _id: args.userId })

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

        signupUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
      
            return { token, user};
          },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No profile with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
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
        },

        addJob: async(_, args) => {
            const jobData = await Job.create(args);
            return jobData;
        },

        updateJob: async(_, { jobId, title, company, location, description, link, skills }) => {
             const jobData = await Job.findOneAndUpdate(
                { _id: jobId }, 
                {$set: { 
                    title:title,
                    company: company,
                    location: location,
                    description: description,
                    link:link, 
                    skills: skills,
                }},
                {new: true});
            return jobData;
         },

        removeJob: async(_, { jobId }) => {
            const jobData = await Job.findOneAndDelete({ _id: jobId });
            return jobData;
        },
        
        addComment: async(_, { jobId, commentBody, username }) => {
            const commentData = await Job.findOneAndUpdate(
               { _id: jobId }, 
               {$addToSet:{ comments: { commentBody, username } }},
               {new: true});
           return commentData;
        },

        removeComment: async(_, { jobId, commentId }) => {
            const commentData = await Job.findOneAndUpdate(
               { _id: jobId }, 
               {$pull:{ comments: { _id: commentId} }},
               {new: true});
           return commentData;
        },

    }
};

module.exports = resolvers;