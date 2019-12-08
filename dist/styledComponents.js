"use strict";

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 20px;\n  border-radius: 3px;\n  border: 1px solid #CCC;\n  color: #FFF;\n  background-color: #000080;\n  text-align: center;\n  font-weight: 400;\n  color: transparent;\n  cursor: pointer;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px 3px;\n  border-radius: 3px;\n  padding: 3px;\n  cursor: pointer;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AmPmButton = _styledComponents.default.button(_templateObject(), function (props) {
  return "\n    height: ".concat(props.height, ";\n    width: ").concat(props.width, ";\n    font-size: ").concat(props.fontSize, ";\n    ").concat(props.isHighlighted ? "\n          background-color: ".concat(props.highlightedBackgroundColor, ";\n          color: ").concat(props.highlightedTextColor, ";\n        ") : "\n          background-color: ".concat(props.nonHighlightedBackgroundColor, ";\n          color: ").concat(props.nonHighlightedTextColor, ";\n        "), "\n  ");
});

var TimePickerWrapper = _styledComponents.default.div(_templateObject2(), function (props) {
  return "\n    height: ".concat(props.height, ";\n    width: ").concat(props.width, ";\n    font-family: ").concat(props.font, ";\n  ");
});

var TimePickerInput = _styledComponents.default.input(_templateObject3(), function (props) {
  return "\n    height: ".concat(props.height, ";\n    width: ").concat(props.width, ";\n    background-color: ").concat(props.backgroundColorOnBlur, ";\n    text-shadow: 0 0 0 ").concat(props.textColorOnBlur, ";\n    font-size: ").concat(props.fontSize, ";\n\n    &:focus {\n      background-color: ").concat(props.backgroundColorOnFocus, ";\n      text-shadow: 0 0 0 ").concat(props.textColorOnFocus, ";\n    }\n  ");
});

module.exports = {
  AmPmButton: AmPmButton,
  TimePickerWrapper: TimePickerWrapper,
  TimePickerInput: TimePickerInput
};