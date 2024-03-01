import Month from "./Month";

const Calendar = () => {
  const year = new Date().getFullYear();
  function CalculateFirstDay(year, monthIndex) {
    let firstDay = new Date(year, monthIndex, 1).getDay();
    return firstDay;
  }
  return (
    <div className="p-2 grid grid-cols-3 gap-4">
      <Month
        month="January"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 0).toString()}
      />
      <Month
        month="February"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 1).toString()}
      />
      <Month
        month="March"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 2).toString()}
      />
      <Month
        month="April"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 3).toString()}
      />
      <Month
        month="May"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 4).toString()}
      />
      <Month
        month="June"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 5).toString()}
      />
      <Month
        month="July"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 6).toString()}
      />
      <Month
        month="August"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 7).toString()}
      />
      <Month
        month="September"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 8).toString()}
      />
      <Month
        month="October"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 9).toString()}
      />
      <Month
        month="November"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 10).toString()}
      />
      <Month
        month="December"
        year={year}
        firstDay={CalculateFirstDay(parseInt(year), 11).toString()}
      />
    </div>
  );
};

export default Calendar;
