const express = require('express');
const authRouter = express.Router();

const {
  register,
  login,
  logout,
  loginFailed,
} = require('../controllers/authController');

authRouter.post('/register', register);

authRouter.post('/login', login);

authRouter.get('/login-fail', loginFailed);

authRouter.post('/logout', logout);

module.exports = authRouter;
