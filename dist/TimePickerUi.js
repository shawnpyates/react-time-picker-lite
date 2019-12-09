"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styledComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WHITE = '#FFF';
var BLACK = '#000';

function TimePickerUi(_ref) {
  var enableTimePicker = _ref.enableTimePicker,
      handleBlur = _ref.handleBlur,
      handleTimePickerKeyUp = _ref.handleTimePickerKeyUp,
      isTimePickerEnabled = _ref.isTimePickerEnabled,
      timeCharsArray = _ref.timeCharsArray,
      timeCharsString = _ref.timeCharsString,
      isPmSelected = _ref.isPmSelected,
      toggleAmPm = _ref.toggleAmPm,
      _ref$placeholderText = _ref.placeholderText,
      placeholderText = _ref$placeholderText === void 0 ? 'Set Time' : _ref$placeholderText,
      shouldUse24HourMode = _ref.shouldUse24HourMode,
      _ref$wrapperHeight = _ref.wrapperHeight,
      wrapperHeight = _ref$wrapperHeight === void 0 ? '120px' : _ref$wrapperHeight,
      _ref$wrapperWidth = _ref.wrapperWidth,
      wrapperWidth = _ref$wrapperWidth === void 0 ? '150px' : _ref$wrapperWidth,
      _ref$inputHeight = _ref.inputHeight,
      inputHeight = _ref$inputHeight === void 0 ? '30%' : _ref$inputHeight,
      _ref$inputWidth = _ref.inputWidth,
      inputWidth = _ref$inputWidth === void 0 ? '100%' : _ref$inputWidth,
      _ref$inputFontSize = _ref.inputFontSize,
      inputFontSize = _ref$inputFontSize === void 0 ? '20px' : _ref$inputFontSize,
      _ref$backgroundColorO = _ref.backgroundColorOnBlur,
      backgroundColorOnBlur = _ref$backgroundColorO === void 0 ? BLACK : _ref$backgroundColorO,
      _ref$textColorOnBlur = _ref.textColorOnBlur,
      textColorOnBlur = _ref$textColorOnBlur === void 0 ? WHITE : _ref$textColorOnBlur,
      _ref$backgroundColorO2 = _ref.backgroundColorOnFocus,
      backgroundColorOnFocus = _ref$backgroundColorO2 === void 0 ? WHITE : _ref$backgroundColorO2,
      _ref$textColorOnFocus = _ref.textColorOnFocus,
      textColorOnFocus = _ref$textColorOnFocus === void 0 ? BLACK : _ref$textColorOnFocus,
      _ref$font = _ref.font,
      font = _ref$font === void 0 ? 'inherit' : _ref$font,
      _ref$amPmButtonHeight = _ref.amPmButtonHeight,
      amPmButtonHeight = _ref$amPmButtonHeight === void 0 ? '25%' : _ref$amPmButtonHeight,
      _ref$amPmButtonWidth = _ref.amPmButtonWidth,
      amPmButtonWidth = _ref$amPmButtonWidth === void 0 ? '25%' : _ref$amPmButtonWidth,
      _ref$amPmButtonFontSi = _ref.amPmButtonFontSize,
      amPmButtonFontSize = _ref$amPmButtonFontSi === void 0 ? '10px' : _ref$amPmButtonFontSi,
      _ref$amPmButtonHighli = _ref.amPmButtonHighlightedBackgroundColor,
      amPmButtonHighlightedBackgroundColor = _ref$amPmButtonHighli === void 0 ? BLACK : _ref$amPmButtonHighli,
      _ref$amPmButtonNonHig = _ref.amPmButtonNonHighlightedBackgroundColor,
      amPmButtonNonHighlightedBackgroundColor = _ref$amPmButtonNonHig === void 0 ? WHITE : _ref$amPmButtonNonHig,
      _ref$amPmButtonHighli2 = _ref.amPmButtonHighlightedTextColor,
      amPmButtonHighlightedTextColor = _ref$amPmButtonHighli2 === void 0 ? WHITE : _ref$amPmButtonHighli2,
      _ref$amPmButtonNonHig2 = _ref.amPmButtonNonHighlightedTextColor,
      amPmButtonNonHighlightedTextColor = _ref$amPmButtonNonHig2 === void 0 ? BLACK : _ref$amPmButtonNonHig2;

  var getAmPmButton = function getAmPmButton(_ref2) {
    var isPm = _ref2.isPm;
    return _react.default.createElement(_styledComponents.AmPmButton, {
      onClick: function onClick(ev) {
        return toggleAmPm(ev, isPm);
      },
      isHighlighted: isPm === isPmSelected,
      highlightedBackgroundColor: amPmButtonHighlightedBackgroundColor,
      nonHighlightedBackgroundColor: amPmButtonNonHighlightedBackgroundColor,
      highlightedTextColor: amPmButtonHighlightedTextColor,
      nonHighlightedTextColor: amPmButtonNonHighlightedTextColor,
      height: amPmButtonHeight,
      width: amPmButtonWidth,
      fontSize: amPmButtonFontSize
    }, isPm ? 'PM' : 'AM');
  };

  return _react.default.createElement(_styledComponents.TimePickerWrapper, {
    height: wrapperHeight,
    width: wrapperWidth,
    font: font
  }, _react.default.createElement(_styledComponents.TimePickerInput, {
    height: inputHeight,
    width: inputWidth,
    fontSize: inputFontSize,
    backgroundColorOnBlur: backgroundColorOnBlur,
    textColorOnBlur: textColorOnBlur,
    backgroundColorOnFocus: backgroundColorOnFocus,
    textColorOnFocus: textColorOnFocus,
    name: "timePicker",
    onBlur: handleBlur,
    onFocus: enableTimePicker,
    onKeyUp: handleTimePickerKeyUp,
    placeholder: placeholderText,
    type: "text",
    value: isTimePickerEnabled ? timeCharsArray.join("") : timeCharsString || placeholderText
  }), !shouldUse24HourMode && _react.default.createElement("div", null, getAmPmButton({
    isPm: false
  }), getAmPmButton({
    isPm: true
  })));
}

var _default = TimePickerUi;
exports.default = _default;