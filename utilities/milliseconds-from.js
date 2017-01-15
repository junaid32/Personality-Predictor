'use strict';


function milliseconds(milliseconds) {
  return milliseconds;
}


function seconds(seconds) {
  return milliseconds(1000*seconds);
}


function minutes(minutes) {
  return seconds(60*minutes);
}


function hours(hours) {
  return minutes(60*hours);
}


module.exports = {
  hours        : hours,
  minutes      : minutes,
  seconds      : seconds,
  milliseconds : milliseconds
};
