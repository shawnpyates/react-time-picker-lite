"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var MAX_HOURS_COLUMN_VALUE = 23;
var INITIAL_TIME_CHARS = ['-', '-', ':', '-', '-'];

var get24HourTime = function get24HourTime(timeString, isPm) {
  var hourColumn = timeString.split(':')[0];

  if (Number(hourColumn) === 12 && !isPm) {
    return timeString.replace(hourColumn, '00');
  }

  if (Number(hourColumn) !== 12 && isPm) {
    return timeString.replace(hourColumn, String(Number(hourColumn) + 12));
  }

  var twoCharHourColumn = Number(hourColumn < 10) ? "0".concat(hourColumn) : hourColumn;
  return timeString.replace(hourColumn, twoCharHourColumn);
};

var createFinalTimestamp = function createFinalTimestamp(date, time) {
  return date.replace('T12:00:00', " ".concat(time, ":00"));
}; // allow 06-09 and 16-19 (valid hour values)
// allow x1-x5 (e.g. 95 if user wants 9:50)
// do not allow x6-x9 where x > 1 (e.g. 29, 39, 49, etc.)
// because both 29:00 and 2:90 are invalid times


var areFirstTwoCharsInvalid = function areFirstTwoCharsInvalid(inputChar, timeChars) {
  return Number("".concat(timeChars[4]).concat(inputChar)) > MAX_HOURS_COLUMN_VALUE && inputChar > 5;
};

var isFourthCharNotPermitted = function isFourthCharNotPermitted(timeChars) {
  return Number("".concat(timeChars[1]).concat(timeChars[3])) > MAX_HOURS_COLUMN_VALUE || timeChars[1] !== '-' && timeChars[4] !== '-' && timeChars[4] > 5;
};

var addTimeChar = function addTimeChar(timeChars, inputChar) {
  var clonedTimeChars = _toConsumableArray(timeChars);

  clonedTimeChars.push(inputChar);

  if (clonedTimeChars[3] !== '-') {
    if (clonedTimeChars[1] !== '-') {
      var tensDigit = clonedTimeChars[1];
      clonedTimeChars[0] = tensDigit;
    }

    var onesDigit = clonedTimeChars[3];
    clonedTimeChars[1] = onesDigit;
  }

  clonedTimeChars.splice(clonedTimeChars.indexOf(':'), 1);
  clonedTimeChars[2] = ':';
  return clonedTimeChars;
};

var deleteTimeChar = function deleteTimeChar(timeChars) {
  var clonedTimeChars = _toConsumableArray(timeChars);

  clonedTimeChars.pop();
  clonedTimeChars.unshift('-');
  clonedTimeChars.splice(clonedTimeChars.indexOf(':'), 1);
  clonedTimeChars.splice(2, 0, ':');
  return clonedTimeChars;
};

var formatTimeChars = function formatTimeChars(timeChars) {
  return timeChars[0] === '-' || timeChars[0] === '0' ? timeChars.slice(1).join('') : timeChars.join('');
};

var isInvalidTimeInput = function isInvalidTimeInput(key, timeChars) {
  return Number.isNaN(Number(key)) || timeChars[0] !== '-' || timeChars[3] === '-' && areFirstTwoCharsInvalid(key, timeChars) || isFourthCharNotPermitted(timeChars);
};

var convertTo12HourFormat = function convertTo12HourFormat(timeString) {
  var hourColumn = Number(timeString.split(':')[0]);

  if (hourColumn === 0) {
    return {
      charStr: timeString.replace(hourColumn, 12),
      shouldSelectPm: false
    };
  }

  if (hourColumn > 12) {
    return {
      charStr: timeString.replace(hourColumn, hourColumn - 12),
      shouldSelectPm: true
    };
  }

  return {
    charStr: timeString
  };
};

var createInputsFromExistingTimeVals = function createInputsFromExistingTimeVals(timeScheduled) {
  var date = new Date(timeScheduled);
  var hours = String(date.getHours());
  var minutes = String(date.getMinutes()).padStart(2, '0');

  var _convertTo12HourForma = convertTo12HourFormat("".concat(hours, ":").concat(minutes)),
      timeCharsAsString = _convertTo12HourForma.timeCharsAsString,
      isPmSelected = _convertTo12HourForma.isPmSelected; // time char input requires 5 chars -- if hours column is single digit, add 0 to front


  var timeChars = timeCharsAsString.length > 4 ? timeCharsAsString.split('') : ['0'].concat(_toConsumableArray(timeCharsAsString.split('')));
  return {
    calendarDate: timeScheduled,
    timeCharsAsString: timeCharsAsString,
    timeChars: timeChars,
    isTimePickerEnabled: true,
    isPmSelected: isPmSelected || false
  };
};

module.exports = {
  addTimeChar: addTimeChar,
  convertTo12HourFormat: convertTo12HourFormat,
  createFinalTimestamp: createFinalTimestamp,
  createInputsFromExistingTimeVals: createInputsFromExistingTimeVals,
  deleteTimeChar: deleteTimeChar,
  formatTimeChars: formatTimeChars,
  get24HourTime: get24HourTime,
  INITIAL_TIME_CHARS: INITIAL_TIME_CHARS,
  isInvalidTimeInput: isInvalidTimeInput,
  TEST_ONLY: {
    areFirstTwoCharsInvalid: areFirstTwoCharsInvalid,
    isFourthCharNotPermitted: isFourthCharNotPermitted
  }
};