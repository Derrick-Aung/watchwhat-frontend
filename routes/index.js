const express = require('express');
const apiRouter = express.Router();
const pollRouter = require('./poll');
const authRouter = require('./auth');
const userRouter = require('./user');

apiRouter.use('/poll', pollRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);

module.exports = apiRouter;

/*
http://localhost:8080/api/auth/facebook
http://localhost:8080/api/poll/expiry
http://localhost:8080/api/poll/feed
http://localhost:8080/api/poll/
*/
