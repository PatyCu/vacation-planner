const Settings = () => {
  const year = "2024";
  const vacationers = [
    {
      name: "Paty",
      ptoDays: 23,
      color: "cyan-600",
    },
    {
      name: "Oriol",
      ptoDays: 28,
      color: "amber-600",
    },
    {
      name: "Sergi",
      ptoDays: 25,
      color: "emerald-600",
    },
  ];

  const cssForCols = `grid grid-cols-${vacationers.length} gap-4 mt-4`;

  return (
    <div className="w-fit border rounded-sm p-4 mt-4">
      <p>
        <span className="font-bold">Year:</span> {year}
      </p>
      <ul className={cssForCols}>
        <li>
          <p>Name: Paty</p>
          <p>PTOs: 23</p>
          <div className="flex flex-wrap gap-x-4">
            <p>Color:</p>
            <div className="size-4 bg-cyan-600 mt-1"></div>
          </div>
        </li>
        <li>
          <p>Name: Oriol</p>
          <p>PTOs: 28</p>
          <div className="flex flex-wrap gap-x-4">
            <p>Color:</p>
            <div className="size-4 bg-amber-600 mt-1"></div>
          </div>
        </li>
        <li>
          <p>Name: Oriol</p>
          <p>PTOs: 28</p>
          <div className="flex flex-wrap gap-x-4">
            <p>Color:</p>
            <div className="size-4 bg-amber-600 mt-1"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
