const express = require('express');
const userRouter = express.Router();
const { requireAuth } = require('../controllers/authController');

userRouter.get('/me', requireAuth, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

module.exports = userRouter;
