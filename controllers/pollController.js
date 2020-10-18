const Poll = require('../models/Poll');
// const { getPollExpiry } = require('../workers/poll-worker');

module.exports.retrieveSinglePoll = async (req, res, next) => {
  try {
    const { movieId } = req.params;

    const poll = await Poll.findOne({ movieId });
    res.status(200).json(poll);
  } catch (error) {
    next(error);
  }
};

module.exports.retrievePollFeed = async (req, res, next) => {
  try {
    const polls = await Poll.aggregate([
      {
        $addFields: {
          votes: {
            $subtract: [{ $size: '$upvoters' }, { $size: '$downvoters' }],
          },
        },
      },
      {
        $sort: { votes: -1 },
      },
    ]).limit(10);
    res.status(200).json(polls);
  } catch (error) {
    next(error);
  }
};

module.exports.votePoll = async (req, res, next) => {
  const _id = req.user._id;
  const { movieId } = req.params;
  const { voteType } = req.body;

  try {
    const result = await Poll.findOrCreate({ movieId });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }

  try {
    let data = {};

    // "" => cancel vote
    // "up" => upvote
    // "down" => downvote

    if (!(voteType === '' || voteType === 'up' || voteType === 'down')) {
      return res.status(400).json({
        success: false,
      });
    }

    data = await Poll.findOneAndUpdate(
      { movieId },
      {
        $pull: { upvoters: _id, downvoters: _id },
      },
      { new: true }
    );

    if (voteType === 'up') {
      data = await Poll.findOneAndUpdate(
        { movieId },
        {
          $addToSet: { upvoters: _id },
        },
        { new: true }
      );
    } else if (voteType === 'down') {
      data = await Poll.findOneAndUpdate(
        { movieId },
        {
          $addToSet: { downvoters: _id },
        },
        { new: true }
      );
    }

    return res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

module.exports.retrievePollExpiry = (req, res, next) => {
  res.status(200).json({
    success: true,
    // TODO
    // poll_expire: getPollExpiry(),
  });
};
