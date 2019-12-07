import styled from 'styled-components';

const TimePickerWrapper = styled.div`
  height: ${props.height};
  width: ${props.width};
`;

const TimePickerInput = styled.input`
  height: ${props.height};
  width: ${props.width};
  background-color: ${props.backgroundColorOnBlur};
  color: ${props.textColorOnBlur};
  border-radius: 3px;
  border: 1px solid #CCC;
  text-align: center;
  font-weight: 400;
  cursor: pointer;

  &:focus {
    background-color: ${props.backgroundColorOnFocus};
    color: ${props.textColorOnFocus};
  }
`;

module.exports = {
  TimePickerWrapper,
  TimePickerInput,
};
