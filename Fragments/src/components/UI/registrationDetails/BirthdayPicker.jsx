import React, {useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';


const BirthdayPicker = ({value, setValue, classes}) => {
  const onDateChange = useCallback((date) => {
    setValue(date);
  }, [setValue]);

  return (
    <SelectDatepicker
      className={classes}
      maxDate={new Date()}
      selectedDate={value}
      onDateChange={onDateChange}
      order="day/month/year"
      hideLabels
      labels={{
        dayLabel: 'день',
        dayPlaceholder: 'день',
        monthLabel: 'місяць',
        monthPlaceholder: 'місяць',
        months: {
          '1': 'Січень',
          '2': 'Лютий',
          '3': 'Березень',
          '4': 'Квітень',
          '5': 'Травень',
          '6': 'Червень',
          '7': 'Липень',
          '8': 'Серпень',
          '9': 'Вересень',
          '10': 'Жовтень',
          '11': 'Листопад',
          '12': 'Грудень'
        },
        yearLabel: 'рік',
        yearPlaceholder: 'рік'
      }}
    />
  );
};

export default BirthdayPicker;