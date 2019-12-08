import styled from 'styled-components';

const TimePickerWrapper = styled.div`
  ${props => `
    height: ${props.height};
    width: ${props.width};
  `}
`;

const TimePickerInput = styled.input`
  border-radius: 3px;
  border: 1px solid #CCC;
  text-align: center;
  font-weight: 400;
  cursor: pointer;

  ${props => `
    height: ${props.height};
    width: ${props.width};
    background-color: ${props.backgroundColorOnFocus}
    color: ${props.textColorOnBlur}

    &:focus {
      background-color: ${props.backgroundColorOnFocus}
      color: ${props.textColorOnFocus}
    }
  `}
`;

module.exports = {
  TimePickerWrapper,
  TimePickerInput,
};
