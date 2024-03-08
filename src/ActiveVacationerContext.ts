import { createContext } from "react";
//import { Vacationer } from "./Types";
 
/*
const ActiveVacationerContext = createContext<[Vacationer, (activeVacationer: Vacationer) => void]>([
    {
        index: 0,
        ptoDays: 23,
        color: 0
    },
    () => {},
]);
*/

const ActiveVacationerContext = createContext<[number, (activeVacationer: number) => void]>([
    0,
    () => {},
]);

export default ActiveVacationerContext;

