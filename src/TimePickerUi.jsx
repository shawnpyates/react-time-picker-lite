import React from "react";

import {
  AmPmButton,
  AmPmButtonContainer,
  TimePickerWrapper,
  TimePickerInput,
} from './styledComponents';

const WHITE = '#FFF';
const BLACK = '#000';

function TimePickerUi({
  enableTimePicker,
  handleBlur,
  handleTimePickerKeyUp,
  isTimePickerEnabled,
  timeCharsArray,
  timeCharsString,
  isPmSelected,
  toggleAmPm,
  placeholderText = 'Set Time',
  shouldUse24HourMode,
  wrapperHeight = '120px',
  wrapperWidth = '150px',
  inputHeight = '30%',
  inputWidth = '100%',
  inputFontSize = '20px',
  backgroundColorOnBlur = BLACK,
  textColorOnBlur = WHITE,
  backgroundColorOnFocus = WHITE,
  textColorOnFocus = BLACK,
  font = 'inherit',
  amPmButtonHeight = '25%',
  amPmButtonWidth = '25%',
  amPmButtonFontSize = '10px',
  amPmButtonHighlightedBackgroundColor = BLACK,
  amPmButtonNonHighlightedBackgroundColor = WHITE,
  amPmButtonHighlightedTextColor = WHITE,
  amPmButtonNonHighlightedTextColor = BLACK,
}) {
  const getAmPmButton = ({ isPm }) => (
    <AmPmButton
      onClick={ev => toggleAmPm(ev, isPm)}
      isHighlighted={isPm === isPmSelected}
      highlightedBackgroundColor={amPmButtonHighlightedBackgroundColor}
      nonHighlightedBackgroundColor={amPmButtonNonHighlightedBackgroundColor}
      highlightedTextColor={amPmButtonHighlightedTextColor}
      nonHighlightedTextColor={amPmButtonNonHighlightedTextColor}
      height={amPmButtonHeight}
      width={amPmButtonWidth}
      fontSize={amPmButtonFontSize}
    >
      {isPm ? 'PM' : 'AM'}
    </AmPmButton>
  );

  return (
    <TimePickerWrapper
      height={wrapperHeight}
      width={wrapperWidth}
      font={font}
    >
      <TimePickerInput
        height={inputHeight}
        width={inputWidth}
        fontSize={inputFontSize}
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
        readOnly
        value={(
          isTimePickerEnabled
            ? timeCharsArray.join('')
            : timeCharsString || placeholderText
        )}
      />
      {!shouldUse24HourMode
      && (
        <AmPmButtonContainer>
          {getAmPmButton({ isPm: false })}
          {getAmPmButton({ isPm: true })}
        </AmPmButtonContainer>
      )}
    </TimePickerWrapper>
  );
}

export default TimePickerUi;
