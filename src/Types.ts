export interface VacationerType{
    index: number;
    name: string;
    ptoDays: number;
    color: number;
    selectedPTO: Array<string>;
}

export interface DayType{
    day: number;
    colorDay: number | undefined;
}