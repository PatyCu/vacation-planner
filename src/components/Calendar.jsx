import Month from "./Month";
import {
  CalculateFirstDay,
  BuildCalendarMonths,
} from "../utils/DateAndTimeUtils";

const Calendar = () => {
  const year = new Date().getFullYear();
  const locale = "CA";

  const calendar = BuildCalendarMonths(locale, year);

  return (
    <div className="p-2 grid grid-cols-3 gap-4">
      {calendar.map((month, index) => (
        <Month
          key={index}
          monthName={month.monthName}
          monthIndex={month.monthIndex}
          year={year}
          firstDay={month.firstDay}
        />
      ))}
    </div>
  );
};

export default Calendar;
