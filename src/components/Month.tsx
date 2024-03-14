import { useContext } from "react";
import ActiveVacationerContext from "../ActiveVacationerContext";
import { VacationerType } from "../Types";
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
  vacationers: Array<VacationerType>;
}

const Month = ({ monthName, monthIndex, year, firstDay, vacationers }: MonthProps) => {
  const weekdayNames = BuildCalendarWeekdayNames("CA");
  const daysOfTheMonth = BuildCalendarDays(year, monthIndex);
  const [activeVacationer, setActiveVacationer] = useContext(ActiveVacationerContext);

  const handleDayClicked = (day: number) => {
    const dayDate = new Date(year, monthIndex, day);
    //vacationers[activeVacationer.index].selectedPTO.push(dayDate.toISOString());
  }

  if (activeVacationer != null) {
    //console.log(activeVacationer);
  }
  return (
    <div className="border bg-slate-200/20 text-center">
      <h1 className="text-xl text-cyan-600 underline">
        {monthName} {year}
      </h1>
      <div className="grid grid-cols-7 p-4">
        {weekdayNames.map((day, index) => (
          <div className="text-cyan-600 size-6" key={ index }>{day}</div>
        ))}

        {daysOfTheMonth.map((day, index) => (
          <Day key={index} day={day.day??-1} colorDay={day.colorDay} firstDay={firstDay} callback={handleDayClicked}/>
        ))}
      </div>
    </div>
  );
};

export default Month;
