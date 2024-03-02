export function CalculateFirstDay(year, monthIndex) {
  let firstDay = new Date(year, monthIndex, 1).getDay();
  if (firstDay === 0) {
    firstDay = 7;
  }
  return firstDay;
}

export function BuildCalendarMonths(locale, year) {
  const intlForMonths = new Intl.DateTimeFormat(locale, { month: "long" });
  const calendar = [];
  for (let i = 0; i < 12; i++) {
    const monthName = intlForMonths.format(new Date(year, i));
    const firstDay = CalculateFirstDay(year, i);
    calendar.push({ monthName: monthName, monthIndex: i, firstDay: firstDay });
  }
  return calendar;
}

export function BuildCalendarWeekdayNames(locale, year) {
  const intlForDays = new Intl.DateTimeFormat(locale, { weekday: "short" });
  const week = [];
  for (let day = 0; day < 7; day++) {
    const weekdayName = intlForDays.format(new Date(year, 2, day + 1));
    week.push(weekdayName);
  }
  return week;
}

export function BuildCalendarDays(year, monthIndex) {
  const lastDay = new Date(year, monthIndex + 1, 0).getDate();
  const days = [];
  for (let day = 2; day <= lastDay; day++) {
    days.push(day);
  }
  return days;
}
