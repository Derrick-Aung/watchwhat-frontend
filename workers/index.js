/*
List of Time zones
https://raw.githubusercontent.com/node-cron/tz-offset/master/generated/offsets.json
*/

const CronJob = require('cron').CronJob;
const resetPoll = require('./tasks/resetPoll');
const { getNextDateOccurence } = require('../utils/index');

// Resets poll
// 0 0 * * MON  (Every Monday 0:00 Start of the day)
new CronJob('0 0 * * MON', resetPoll, null, true, 'Asia/Yangon');

// 0 (Sun) - 6 (Sat)
module.exports.getPollExpiry = (date) => {
  return getNextDateOccurence(date, 1, 0, 0, 0);
};

// Testing Code
// const curDate = new Date();
// const pollExpiry = this.getPollExpiry(curDate);
// console.log(
//   `Next Poll at ${pollExpiry.getHours()}: ${pollExpiry.getMinutes()} : ${pollExpiry.getSeconds()}, ${pollExpiry.getDate()}-${pollExpiry.getMonth()}-${pollExpiry.getFullYear()}`
// );
