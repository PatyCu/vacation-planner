import { useContext, useState } from "react";
import ActiveVacationerContext from "../ActiveVacationerContext";
import ClickableDay from "./ClickableDay";

interface DayProps {
  day: number;
  firstDay: number;
  colorDay: number;
  callback: (day: number) => void;
}

const Day = ({ day, firstDay, colorDay, callback }: DayProps) => {
  const [activeVacationer, _] = useContext(ActiveVacationerContext);
  const handleDayClicked = () => {
    callback(day);
  }

  return (
    <div className={day === 1 ? "col-start-" + firstDay : ""}>
      <ClickableDay colorDay={colorDay} colorVacationer={activeVacationer?.color} text={day.toString()} callback={ handleDayClicked } />    
    </div>
    );
  
};

export default Day;
