import { useContext } from "react";
import ClickableColor from "./ClickableColor";
import ActiveVacationerContext from "../ActiveVacationerContext";
interface VacationerProps {
    index: number;
    name: string;
    ptoDays: number;
    color: number;
}

const Vacationer: React.FC<VacationerProps> = ({ index, name, ptoDays, color }) => {
  const [activeVacationer, setActiveVacationer] = useContext(ActiveVacationerContext);
  const cssForActiveVacationer = activeVacationer == index ? "border-sky-500" : "";

    return (
        <li
        key={index}
        className={`border-2 border-dashed p-4 bg-slate-100/20 hover:bg-slate-100/80 ${cssForActiveVacationer}`}
        onClick={() => setActiveVacationer(index)}
          >
            <p>
              <span className="font-bold">Name:</span> {name}
            </p>
            <p>
              <span className="font-bold">PTOs:</span> {ptoDays}
            </p>
            <div className="flex flex-wrap gap-x-4">
              <p>
                <span className="font-bold">Color:</span>
              </p>
              <ClickableColor color={ color } />
            </div>
          </li>
    );
};

export default Vacationer;