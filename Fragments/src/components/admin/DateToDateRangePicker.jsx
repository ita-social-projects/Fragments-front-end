import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./DateToDateRangePicker.scss";

const DateToDateRangePicker = ({ range, setRange, level, setLevel }) => {
  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  // Show date when it is picked
  const handleFormatingDate = (e) => {
    level
      ? (e = `${format(range[0].startDate, "MM/dd/yyyy")} - ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`)
      : console.log(level);
    return e;
  };
  return (
    <div className="calendarWrap">
      <input
        placeholder="ДД/ММ/РРРР - ДД/ММ/РРРР"
        readOnly
        className="inputBox"
        value={handleFormatingDate()}
        onClick={(e) => {
          setOpen((open) => !open);
        }}
      />

      <div ref={refOne}>
        {open && (
          <DateRangePicker
            onChange={(item) => {
              setRange([item.selection]);
              setLevel(true);
            }}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateToDateRangePicker;
