import {
  BuildCalendarWeekdayNames,
  BuildCalendarDays,
} from "../utils/DateAndTimeUtils";

const Month = ({ monthName, monthIndex, year, firstDay }) => {
  const weekdayNames = BuildCalendarWeekdayNames("CA", year);
  const daysOfTheMonth = BuildCalendarDays(year, monthIndex);

  return (
    <div className="text-center bg-slate-200/20 border">
      <h1 className="text-cyan-600 text-xl underline">
        {monthName} {year}
      </h1>
      <ol>
        {weekdayNames.map((day, index) => (
          <li key={index} className="day-name text-cyan-600">
            {day}
          </li>
        ))}
        <li className={`col-start-${firstDay}`}>1</li>
        {daysOfTheMonth.map((day, index) => (
          <li key={index} className="">
            {day}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Month;
