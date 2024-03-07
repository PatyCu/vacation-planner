export function CalculateFirstDay(year: number, monthIndex: number) {
  let firstDay = new Date(year, monthIndex, 1).getDay();
  if (firstDay === 0) {
    firstDay = 7;
  }
  return firstDay;
}

export function BuildCalendarMonths(locale: string, year: number) {
  const intlForMonths = new Intl.DateTimeFormat(locale, { month: "long" });
  const calendar = [];
  for (let i = 0; i < 12; i++) {
    const monthName = intlForMonths.format(new Date(year, i));
    const firstDay = CalculateFirstDay(year, i);
    calendar.push({ monthName: monthName, monthIndex: i, firstDay: firstDay });
  }
  return calendar;
}

export function BuildCalendarWeekdayNames(locale: string) {
  const intlForDays = new Intl.DateTimeFormat(locale, { weekday: "short" });
  const week = [];
  for (let day = 0; day < 7; day++) {
    // 2024 and 0 are both hard-coded since we know those are dates that will work to get the day of the week
    const weekdayName = intlForDays.format(new Date(2024, 0, day + 1));
    week.push(weekdayName);
  }
  return week;
}

export function BuildCalendarDays(year: number, monthIndex: number) {
  const lastDay = new Date(year, monthIndex + 1, 0).getDate();
  const days = [];
  for (let day = 1; day <= lastDay; day++) {
    days.push(day);
  }
  return days;
}

export function GetFirstDayAttributes(firstDay: number) {
  let firstDayClass = "";
  if (firstDay === 1) {
    firstDayClass = "col-start-1";
  } else if (firstDay === 2) {
    firstDayClass = "col-start-2";
  } else if (firstDay === 3) {
    firstDayClass = "col-start-3";
  } else if (firstDay === 4) {
    firstDayClass = "col-start-4";
  } else if (firstDay === 5) {
    firstDayClass = "col-start-5";
  } else if (firstDay === 6) {
    firstDayClass = "col-start-6";
  } else if (firstDay === 7) {
    firstDayClass = "col-start-7";
  } else {
    firstDayClass = "col-start-1";
  }
  return firstDayClass;
}
