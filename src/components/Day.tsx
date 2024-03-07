import { GetFirstDayAttributes } from "../utils/DateAndTimeUtils";

interface DayProps {
  day: string | number;
  isWeekName: boolean;
  firstDay: number;
}

const Day = ({ day, isWeekName, firstDay }: DayProps) => {
  const appliedClasses = isWeekName ? "text-cyan-600 size-6" : "text-red-100";
  //const firstDayAttributes = `col-start-${firstDay}`;
  const firstDayAttributes = GetFirstDayAttributes(firstDay);

  if (isWeekName) {
    return <div className={appliedClasses}>{day}</div>;
  }
  day = parseInt(day as string);
  if (day === 1) {
    return (
      <div className={firstDayAttributes}>
        <div className="size-6 hover:rounded-full hover:bg-cyan-200">{day}</div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="size-6 hover:rounded-full hover:bg-cyan-200">{day}</div>
      </div>
    );
  }
};

export default Day;
