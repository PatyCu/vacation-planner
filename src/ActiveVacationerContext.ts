import { createContext } from "react";
import { VacationerType } from "./Types";
 

const ActiveVacationerContext = createContext<[VacationerType, (activeVacationer: VacationerType) => void]>([
    {
        index: 0,
        name: "Default",
        ptoDays: 23,
        color: 0,
        selectedPTO: []
    },
    () => {},
]);

/*
const ActiveVacationerContext = createContext<[number, (activeVacationer: number) => void]>([
    0,
    () => {},
]);
*/
export default ActiveVacationerContext;

