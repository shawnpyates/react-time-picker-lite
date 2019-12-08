"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TimePickerUi = _interopRequireDefault(require("./TimePickerUi"));

var _timeInputHandlers = require("./timeInputHandlers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DELETE_KEY_CODE = 8;
var VALID_TIME_INPUT = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

var getUpdatedTimeChars = function getUpdatedTimeChars(charStr) {
  var hourColumn = charStr.split(":")[0];
  return hourColumn.length > 1 ? hourColumn.split("") : ["-", hourColumn];
};

function TimePicker() {
  var _useState = (0, _react.useState)(_timeInputHandlers.INITIAL_TIME_CHARS),
      _useState2 = _slicedToArray(_useState, 2),
      timeCharsArray = _useState2[0],
      setTimeCharsArray = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      timeCharsString = _useState4[0],
      setTimeCharsString = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isTimePickerEnabled = _useState6[0],
      setIsTimePickerEnabled = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isPmSelected = _useState8[0],
      setIsPmSelected = _useState8[1];

  var enableTimePicker = function enableTimePicker() {
    var updatedTimeCharsArray = timeCharsString ? getUpdatedTimeChars(timeCharsString) : timeCharsArray;
    setIsTimePickerEnabled(true);
    setTimeCharsArray(updatedTimeCharsArray);
  };

  var handleTimePickerKeyUp = function handleTimePickerKeyUp(ev) {
    var key = ev.key,
        keyCode = ev.keyCode;

    if (keyCode === DELETE_KEY_CODE && timeCharsArray[4] !== "-") {
      setTimeCharsArray((0, _timeInputHandlers.deleteTimeChar)(timeCharsArray));
      return;
    }

    if ((0, _timeInputHandlers.isInvalidTimeInput)(key, timeCharsArray)) {
      return;
    }

    setTimeCharsArray((0, _timeInputHandlers.addTimeChar)(timeCharsArray, key));
  };

  var handleBlur = function handleBlur() {
    var timeString = (0, _timeInputHandlers.formatTimeChars)(timeCharsArray);

    if (!VALID_TIME_INPUT.test(timeString)) {
      setIsPmSelected(false);
      setTimeCharsArray(_timeInputHandlers.INITIAL_TIME_CHARS);
      setTimeCharsString(null);
      return;
    }

    var _convertTo12HourForma = (0, _timeInputHandlers.convertTo12HourFormat)(timeString),
        charStr = _convertTo12HourForma.charStr,
        shouldSelectPm = _convertTo12HourForma.shouldSelectPm;

    setIsTimePickerEnabled(false);
    setTimeCharsString(charStr);
    setIsPmSelected(shouldSelectPm !== undefined ? shouldSelectPm : isPmSelected);
  };

  var toggleAmPm = function toggleAmPm(ev, shouldSelectPm) {
    ev.preventDefault();
    setIsPmSelected(shouldSelectPm);
  };

  return _react.default.createElement("div", null, _react.default.createElement(_TimePickerUi.default, {
    enableTimePicker: enableTimePicker,
    handleBlur: handleBlur,
    handleTimePickerKeyUp: handleTimePickerKeyUp,
    isTimePickerEnabled: isTimePickerEnabled,
    timeCharsArray: timeCharsArray,
    timeCharsString: timeCharsString,
    toggleAmPm: toggleAmPm
  }));
}

var _default = TimePicker;
exports.default = _default;