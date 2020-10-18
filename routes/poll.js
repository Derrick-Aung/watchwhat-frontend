const express = require('express');
const pollRouter = express.Router();
const {
  retrieveSinglePoll,
  retrievePollFeed,
  votePoll,
  retrievePollExpiry,
} = require('../controllers/pollController');
const { requireAuth } = require('../controllers/authController');

// @desc    Get all polls
// @route   GET /api/polls
// @access  Public
pollRouter.get('/feed', retrievePollFeed);
pollRouter.get('/expiry', retrievePollExpiry);
pollRouter.post('/:movieId', requireAuth, votePoll);
pollRouter.get('/:movieId', retrieveSinglePoll);

module.exports = pollRouter;
