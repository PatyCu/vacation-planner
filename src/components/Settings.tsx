import { VacationerType } from "../Types";
import Vacationer from "./Vacationer";

interface SettingsProps {
  year: string;
  vacationers: Array<VacationerType>;
}

const Settings = ({ year, vacationers }: SettingsProps) => {
  const cssForCols = `grid grid-cols-2 mt-4 gap-x-8`;

  return (
    <div className="w-fit border rounded-sm p-4 mt-4 ml-2">
      <div className="flex flex-wrap gap-x-4 items-end">
        <label htmlFor="year" className="block mb-2 text-gray-900 font-bold w-fit">
          Year
        </label>
        <input
          type="number"
          id="year"
          placeholder={year}
          required
          className="block w-fit p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600/80"
        />
      </div>
      <div className={cssForCols}>
        {vacationers.map((vacationer, index) => (
          <Vacationer
            key={ index }
            index={index}
            name={vacationer.name}
            ptoDays={vacationer.ptoDays}
            color={vacationer.color}
            selectedPTO={vacationer.selectedPTO}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
