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
  resetTimeValues,
} from "./timeInputHandlers";

const DELETE_KEY_CODE = 8;
const VALID_TIME_INPUT = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

const getUpdatedTimeChars = charStr => {
  const hourColumn = charStr.split(":")[0];
  return hourColumn.length > 1 ? hourColumn.split("") : ["-", hourColumn];
};

function TimePicker() {
  const [timeCharsArray, setTimeCharsArray] = useState(INITIAL_TIME_CHARS);
  const [timeCharsString, setTimeCharsString] = useState(null);
  const [isTimePickerEnabled, setIsTimePickerEnabled] = useState(false);
  const [isPmSelected, setIsPmSelected] = useState(false);

  const enableTimePicker = () => {
    const updatedTimeCharsArray = timeCharsString
      ? getUpdatedTimeChars(timeCharsString)
      : timeCharsArray;
    setIsTimePickerEnabled(true);
    setTimeCharsArray(updatedTimeCharsArray);
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
      setIsPmSelected(false);
      setTimeCharsArray(INITIAL_TIME_CHARS);
      setTimeCharsString(null);
      return;
    }
    const { charStr, shouldSelectPm } = convertTo12HourFormat(timeString);
    setIsTimePickerEnabled(false);
    setTimeCharsString(charStr);
    setIsPmSelected(
      shouldSelectPm !== undefined ? shouldSelectPm : isPmSelected
    );
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
        toggleAmPm={toggleAmPm}
      />
    </div>
  );
}

export default TimePicker;
