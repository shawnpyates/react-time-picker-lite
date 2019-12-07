import React from 'react';

import { TimePickerWrapper, TimePickerInput } from './styledComponents';

function TimePickerUi({
  enableTimePicker,
  handleBlur,
  handleTimePickerKeyUp,
  isTimePickerEnabled,
  placeholderText = 'Set Time',
  timeCharsArray,
  timeCharsString,
  toggleAmPm,
  wrapperHeight = '20px',
  wrapperWidth = '30%',
  inputHeight = '100%',
  inputWidth = '100%',
  backgroundColorOnBlur = '#000',
  textColorOnBlur = '#FFF',
  backgroundColorOnFocus = '#FFF',
  textColorOnFocus = '#000',
}) {
  return (
    <TimePickerWrapper
      height={wrapperHeight}
      width={wrapperWidth}
    >
      <TimePickerInput
        height={inputHeight}
        width={inputWidth}
        backgroundColorOnBlur={backgroundColorOnBlur}
        textColorOnBlur={textColorOnBlur}
        backgroundColorOnFocus={backgroundColorOnFocus}
        textColorOnFocus={textColorOnFocus}
        name="timePicker"
        onBlur={handleBlur}
        onFocus={enableTimePicker}
        onKeyUp={handleTimePickerKeyUp}
        placeholder={placeholderText}
        type="text"
        value={
          isTimePickerEnabled
            ? timeCharsArray.join('')
            : timeCharsString || placeholderText
        }
      />
    </TimePickerWrapper>
  );
}

export default TimePickerUi;
