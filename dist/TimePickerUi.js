"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styledComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TimePickerUi(_ref) {
  var enableTimePicker = _ref.enableTimePicker,
      handleBlur = _ref.handleBlur,
      handleTimePickerKeyUp = _ref.handleTimePickerKeyUp,
      isTimePickerEnabled = _ref.isTimePickerEnabled,
      _ref$placeholderText = _ref.placeholderText,
      placeholderText = _ref$placeholderText === void 0 ? "Set Time" : _ref$placeholderText,
      timeCharsArray = _ref.timeCharsArray,
      timeCharsString = _ref.timeCharsString,
      toggleAmPm = _ref.toggleAmPm;
  return _react.default.createElement(_styledComponents.TimePickerWrapper, null, _react.default.createElement(_styledComponents.TimePickerInput, {
    name: "timePicker",
    onBlur: handleBlur,
    onFocus: enableTimePicker,
    onKeyUp: handleTimePickerKeyUp,
    placeholder: placeholderText,
    type: "text",
    value: isTimePickerEnabled ? timeCharsArray.join("") : timeCharsString || placeholderText
  }));
}

var _default = TimePickerUi;
exports.default = _default;