
/** ******************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date    *
 *                                                                                          *
 ******************************************************************************************* */


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
export function parseDataFromRfc2822(value) {
  return new Date(value);
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
export function parseDataFromIso8601(value) {
  return new Date(value);
}


/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
export function isLeapYear(date) {
  let year = date.getFullYear();
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;    
  } else if (year % 400 !== 0) {
    return false;
  } 
  return true;
}


/**
 * Returns the string represention of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
export function timeSpanToString(startDate, endDate) {
  let dif = new Date(endDate.getTime() - startDate.getTime() + timezoneOffset());
  return clock(dif);

  function clock(time) {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let millisecond = time.getMilliseconds();

    let temp = ((hour < 10) ? '0' + hour : hour);
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += ((millisecond < 100) ? '.0' : '.') + ((millisecond < 10) ? '0' + millisecond : millisecond);

    return temp;
  }

  function timezoneOffset() {
    return (new Date()).getTimezoneOffset() * 60000;
  }
}


/**
 * Returns the angle (in radians) between the hands of an analog clock for the 
 * specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
export function angleBetweenClockHands(date) {
  let hours = date.getHours() + date.getTimezoneOffset() / 60;
  if (hours > 11) hours -= 12;
  let minutes = date.getMinutes();
  let angleBetweenHands = Math.abs(0.5 * (60 * hours - 11 * minutes));
  angleBetweenHands = (angleBetweenHands > 180) ? 360 - angleBetweenHands : angleBetweenHands;
  return angleBetweenHands * Math.PI / 180;
}
