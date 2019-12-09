/* eslint-disable indent */
// (eslint handles indentations inside of template literals poorly)

import styled from 'styled-components';

const AmPmButton = styled.button`
  margin: 10px 3px;
  border-radius: 3px;
  padding: 3px;
  cursor: pointer;

  ${(props) => `
    height: ${props.height};
    width: ${props.width};
    font-size: ${props.fontSize};
    ${(
      props.isHighlighted
        ? `
          background-color: ${props.highlightedBackgroundColor};
          color: ${props.highlightedTextColor};
        `
        : `
          background-color: ${props.nonHighlightedBackgroundColor};
          color: ${props.nonHighlightedTextColor};
        `
    )}
  `}
`;

const TimePickerWrapper = styled.div`
  display: inline-block;

  ${(props) => `
    height: ${props.height};
    width: ${props.width};
    font-family: ${props.font};
  `}
`;

// making color transparent and setting text-shadow instead makes text cursor invisible
const TimePickerInput = styled.input`
  width: 100%;
  height: 20px;
  border-radius: 3px;
  border: 1px solid #CCC;
  color: #FFF;
  background-color: #000080;
  text-align: center;
  font-weight: 400;
  color: transparent;
  cursor: pointer;

  ${(props) => `
    height: ${props.height};
    width: ${props.width};
    background-color: ${props.backgroundColorOnBlur};
    text-shadow: 0 0 0 ${props.textColorOnBlur};
    font-size: ${props.fontSize};

    &:focus {
      background-color: ${props.backgroundColorOnFocus};
      text-shadow: 0 0 0 ${props.textColorOnFocus};
    }
  `}
`;

module.exports = {
  AmPmButton,
  TimePickerWrapper,
  TimePickerInput,
};
