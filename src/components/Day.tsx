import { useContext, useState } from "react";
import ActiveVacationerContext from "../ActiveVacationerContext";
import ClickableDay from "./ClickableDay";

interface DayProps {
  day: number;
  firstDay: number;
  colorDay?: number;
}

const Day = ({ day, firstDay, colorDay }: DayProps) => {
  const [activeVacationer, _] = useContext(ActiveVacationerContext);

  return (
    <div className={day === 1 ? "col-start-" + firstDay : ""}>
      <ClickableDay colorDay={-1} colorVacationer={activeVacationer?.color}  text={day.toString()} />    
    </div>
    );
  
};

export default Day;
