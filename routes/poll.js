const express = require('express');
const pollRouter = express.Router();
const {
  retrievePollFeed,
  votePoll,
  retrievePollExpiry,
} = require('../controllers/pollController');
const { requireAuth } = require('../controllers/authController');

// @desc    Get all polls
// @route   GET /api/polls
// @access  Public
pollRouter.post('/', requireAuth, votePoll);
pollRouter.get('/feed', retrievePollFeed);
pollRouter.get('/expiry', retrievePollExpiry);

module.exports = pollRouter;
