const { sendDiscordWebhoook } = require('../../services');
const Poll = require('../../models/Poll');
const User = require('../../models/User');

const resetPoll = async () => {
  console.log('Reseting poll at ' + Date.now() + ' epoch time');

  let topPoll = await Poll.aggregate([
    {
      $addFields: {
        votes: {
          $subtract: [{ $size: '$upvoters' }, { $size: '$downvoters' }],
        },
      },
    },
    {
      $lookup: {
        from: User.collection.name,
        localField: 'upvoters',
        foreignField: '_id',
        as: 'upvoters',
      },
    },
    {
      $sort: { votes: -1 },
    },
  ]).limit(1);

  if (topPoll) await sendDiscordWebhoook(topPoll[0]);

  await Poll.deleteMany({});
};

module.exports = resetPoll;
