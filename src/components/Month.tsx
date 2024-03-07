import {
  BuildCalendarWeekdayNames,
  BuildCalendarDays,
} from "../utils/DateAndTimeUtils";
import Day from "./Day";

interface MonthProps {
  monthName: string;
  monthIndex: number;
  year: number;
  firstDay: number;
}

const Month = ({ monthName, monthIndex, year, firstDay }: MonthProps) => {
  const weekdayNames = BuildCalendarWeekdayNames("CA");
  const daysOfTheMonth = BuildCalendarDays(year, monthIndex);
  const firstDayAttributes = `col-start-${firstDay}`;

  return (
    <div className="border bg-slate-200/20 text-center">
      <h1 className="text-xl text-cyan-600 underline">
        {monthName} {year}
      </h1>
      <div className="grid grid-cols-7 p-4">
        {weekdayNames.map((day, index) => (
          <Day key={index} day={day} isWeekName={true} firstDay={firstDay} />
        ))}

        {daysOfTheMonth.map((day, index) => (
          <Day key={index} day={day} isWeekName={false} firstDay={firstDay} />
        ))}
      </div>
    </div>
  );
};

export default Month;
