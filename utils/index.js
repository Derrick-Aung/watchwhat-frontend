// TODO unit test this function
// Returns date for coming 'day-of-week' at midnight
// Different hour, minute, second values cause a bug with offsetting months and years
// Example: getNextDateOccurence(new Date(), 5 <-Friday, 9,0,0)
// should return date for coming Friday 9 AM sharp
// @param dayOfWeek 0:Su,1:Mo,2:Tu,3:We,4:Th,5:Fr,6:Sa
module.exports.getNextDateOccurence = (
  date,
  dayOfWeek,
  hour,
  minute,
  second
) => {
  var resultDate = new Date(date.getTime());
  resultDate.setDate(
    date.getDate() + ((7 + dayOfWeek - date.getDay() - 1) % 7) + 1
  );
  resultDate.setHours(hour);
  resultDate.setMinutes(minute);
  resultDate.setSeconds(second);
  resultDate.setMilliseconds(0);
  return resultDate;
};
