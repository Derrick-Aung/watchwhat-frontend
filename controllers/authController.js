const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');

module.exports.requireAuth = async (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send({
      error: 'Not authorized',
    });
  }
  next();
};

module.exports.register = async (req, res, next) => {
  const { fullName, email, password, password2 } = req.body;

  if (!fullName || !email || !password || !password2) {
    return res.status(400).send({ error: 'Please fill in all fields' });
  }

  if (password != password2) {
    return res.status(400).send({ error: 'Passwords must match' });
  }

  if (password.length < 6) {
    return res.status(400).send({ error: 'User with email already exists' });
  }

  const newUser = new User({
    fullName,
    email,
    password,
  });

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ error: 'User with email already exists' });
    }

    bcrypt.genSalt(10, (err, salt) =>
      bcrypt.hash(password, salt, async (err, hash) => {
        await new User({ fullName, email, password: hash }).save();
      })
    );

    return res.status(201).end();
  } catch (error) {
    next(error);
  }
};

module.exports.login = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/api/user/me',
    failureRedirect: '/api/auth/login-fail',
  })(req, res, next);
};

module.exports.loginFailed = (req, res, next) => {
  res.status(400).send({ error: 'Incorrect credentials' });
};

module.exports.logout = (req, res) => {
  req.logout();
  res.status(200).send();
};
