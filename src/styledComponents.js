import styled from 'styled-components';

const TimePickerWrapper = styled.div`
  max-width: 30%;
`;

const TimePickerInput = styled.input`
  width: 100%;
  height: 20px;
  border-radius: 3px;
  border: 1px solid #CCC;
  color: #FFF;
  background-color: #000080;
  text-align: center;
  font-weight: 400;
  cursor: pointer;

  &:focus {
    color: transparent;
    background-color: #FFF;
    text-shadow: 0 0 0 #000080;
  }
`;

module.exports = {
  TimePickerWrapper,
  TimePickerInput,
};