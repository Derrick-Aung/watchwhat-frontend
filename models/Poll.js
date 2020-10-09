const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const PollSchema = new Schema({
  movieId: {
    type: String,
    required: true,
    trim: true,
  },
  upvoters: [
    {
      type: Schema.ObjectId,
      ref: 'User',
    },
  ],
  downvoters: [
    {
      type: Schema.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PollSchema.plugin(findOrCreate);
const PollModel = mongoose.model('Poll', PollSchema);
module.exports = PollModel;
