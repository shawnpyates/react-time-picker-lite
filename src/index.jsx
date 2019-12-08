import React, { useState } from "react";

import TimePickerUi from "./TimePickerUi";

import {
  addTimeChar,
  convertTo12HourFormat,
  deleteTimeChar,
  formatTimeChars,
  get24HourTime,
  INITIAL_TIME_CHARS,
  isInvalidTimeInput,
} from './timeInputHandlers';

const DELETE_KEY_CODE = 8;
const VALID_TIME_INPUT = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

const getUpdatedTimeChars = (charArr, charStr) => {
  const hourColumn = charStr.split(':')[0];
  const updatedHour = hourColumn.length > 1 ? hourColumn.split('') : ['-', hourColumn];
  return updatedHour.concat(charArr.slice(2));
};

function TimePicker({
  wrapperWidth,
  wrapperHeight,
  inputWidth,
  inputHeight,
  backgroundColorOnBlur,
  textColorOnBlur,
  backgroundColorOnFocus,
  textColorOnFocus,
  onError = () => null,
  onSuccess = () => null,
  shouldUse24HourMode = false,
}) {
  const [timeCharsArray, setTimeCharsArray] = useState(INITIAL_TIME_CHARS);
  const [timeCharsString, setTimeCharsString] = useState(null);
  const [isTimePickerEnabled, setIsTimePickerEnabled] = useState(false);
  const [isPmSelected, setIsPmSelected] = useState(false);

  const enableTimePicker = () => {
    const updatedTimeCharsArray = (
      timeCharsString
        ? getUpdatedTimeChars(timeCharsArray, timeCharsString)
        : timeCharsArray
    );
    setIsTimePickerEnabled(true);
    setTimeCharsArray(updatedTimeCharsArray);
  };

  const resetInput = () => {
    setTimeCharsArray(INITIAL_TIME_CHARS);
    setTimeCharsString(null);
    setIsPmSelected(false);
    setIsTimePickerEnabled(false);
  };

  const handleTimePickerKeyUp = ev => {
    const { key, keyCode } = ev;
    if (keyCode === DELETE_KEY_CODE && timeCharsArray[4] !== "-") {
      setTimeCharsArray(deleteTimeChar(timeCharsArray));
      return;
    }
    if (isInvalidTimeInput(key, timeCharsArray)) {
      return;
    }
    setTimeCharsArray(addTimeChar(timeCharsArray, key));
  };

  const handleBlur = () => {
    const timeString = formatTimeChars(timeCharsArray);
    if (!VALID_TIME_INPUT.test(timeString)) {
      resetInput();
      onError();
      return;
    }
    setIsTimePickerEnabled(false);
    if (shouldUse24HourMode) {
      setTimeCharsString(timeString.replace('-', ''));
      onSuccess(timeString.replace('-', '0'));
      return;
    }
    const { charStr, shouldSelectPm } = convertTo12HourFormat(timeString);
    setTimeCharsString(charStr);
    setIsPmSelected(shouldSelectPm !== undefined ? shouldSelectPm : isPmSelected);
    const timeToReturn = get24HourTime(charStr);
    onSuccess(timeToReturn);
  };

  const toggleAmPm = (ev, shouldSelectPm) => {
    ev.preventDefault();
    setIsPmSelected(shouldSelectPm);
  };

  return (
    <div>
      <TimePickerUi
        enableTimePicker={enableTimePicker}
        handleBlur={handleBlur}
        handleTimePickerKeyUp={handleTimePickerKeyUp}
        isTimePickerEnabled={isTimePickerEnabled}
        timeCharsArray={timeCharsArray}
        timeCharsString={timeCharsString}
        isPmSelected={isPmSelected}
        toggleAmPm={toggleAmPm}
        shouldUse24HourMode={shouldUse24HourMode}
        wrapperWidth={wrapperWidth}
        wrapperHeight={wrapperHeight}
        inputWidth={inputWidth}
        inputHeight={inputHeight}
        backgroundColorOnBlur={backgroundColorOnBlur}
        textColorOnBlur={textColorOnBlur}
        backgroundColorOnFocus={backgroundColorOnFocus}
        textColorOnFocus={textColorOnFocus}
      />
    </div>
  );
}

export default TimePicker;
