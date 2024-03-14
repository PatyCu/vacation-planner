import { useContext, useState } from "react";
import ClickableColor from "./ClickableColor";
import ActiveVacationerContext from "../ActiveVacationerContext";

interface VacationerProps {
  index: number;
  name: string;
  ptoDays: number;
  color: number;
  selectedPTO: Array<string>;
}

const Vacationer = ({ index, name, ptoDays, color, selectedPTO }: VacationerProps) => {
  const [activeVacationer, setActiveVacationer] = useContext(ActiveVacationerContext);
  const [activeColor, setActiveColor] = useState(color);
  const cssForActiveVacationer = activeVacationer?.index == index ? "border-sky-500" : "";
  const handleClick = (activeColor: number) => {
        setActiveColor(activeColor);
        setActiveVacationer(activeVacationer);
  } 
  
  const updateActiveVacationer = (index: number) => {
    setActiveVacationer({index: index, name: name, ptoDays: ptoDays, color: activeColor, selectedPTO: selectedPTO})
  }

    return (
        <div
        className={`border-2 border-dashed p-4 bg-slate-100/20 hover:bg-slate-100/80 ${cssForActiveVacationer}`}
        onClick={() => updateActiveVacationer(index)}
          >
            <p>
              <span className="font-bold">Name:</span> {name}
            </p>
            <p>
              <span className="font-bold">PTOs:</span> {ptoDays}
        </p>
        <p>used PTOs: { activeVacationer?.selectedPTO?.length}</p>
            <div className="flex flex-wrap gap-x-4">
              <p>
                <span className="font-bold">Color:</span>
              </p>
              <ClickableColor color={ color } callback={handleClick}/>
            </div>
          </div>
    );
};

export default Vacationer;