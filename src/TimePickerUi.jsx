import React from "react";

import { TimePickerWrapper, TimePickerInput } from "./styledComponents";

function TimePickerUi({
  enableTimePicker,
  handleBlur,
  handleTimePickerKeyUp,
  isTimePickerEnabled,
  placeholderText = "Set Time",
  timeCharsArray,
  timeCharsString,
  toggleAmPm,
}) {
  return (
    <TimePickerWrapper>
      <TimePickerInput
        name="timePicker"
        onBlur={handleBlur}
        onFocus={enableTimePicker}
        onKeyUp={handleTimePickerKeyUp}
        placeholder={placeholderText}
        type="text"
        value={
          isTimePickerEnabled
            ? timeCharsArray.join("")
            : timeCharsString || placeholderText
        }
      />
    </TimePickerWrapper>
  );
}

export default TimePickerUi;
