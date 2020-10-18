require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

const apiRouter = require('./routes');

// Initiate Cron Jobs
const workers = require('./workers');

// MongoDb Connect
(async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    throw new Error(err);
  }
})();
mongoose.set('useFindAndModify', false);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('tiny'));
app.use(cors());

//Express Session
app.use(
  session({
    secret: 'secret',
    resave: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365,
    },
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Routing
app.use('/api', apiRouter);

// Production Routing Setup
if (process.env.NODE_ENV === 'production') {
  console.log('Productions');
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
