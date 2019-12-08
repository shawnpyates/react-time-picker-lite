"use strict";

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 20px;\n  border-radius: 3px;\n  border: 1px solid #CCC;\n  color: #FFF;\n  background-color: #000080;\n  text-align: center;\n  font-weight: 400;\n  cursor: pointer;\n\n  &:focus {\n    color: transparent;\n    background-color: #FFF;\n    text-shadow: 0 0 0 #000080;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 30%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TimePickerWrapper = _styledComponents.default.div(_templateObject());

var TimePickerInput = _styledComponents.default.input(_templateObject2());

module.exports = {
  TimePickerWrapper: TimePickerWrapper,
  TimePickerInput: TimePickerInput
};