const express = require('express');
const apiRouter = express.Router();
const pollRouter = require('./poll');
const authRouter = require('./auth');
const userRouter = require('./user');

apiRouter.use('/poll', pollRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);

module.exports = apiRouter;
