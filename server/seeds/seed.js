const db = require('../config/connection');
const { User, Job } = require('../models');
const userSeeds = require('./userSeeds.json');
const jobSeeds = require('./jobSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});
  await User.create(userSeeds);

  await Job.deleteMany({});
  await Job.create(jobSeeds);

  console.log('all done!');
  process.exit(0);
});
