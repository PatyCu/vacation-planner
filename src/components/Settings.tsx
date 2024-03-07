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
  ];
  const cssForColors = vacationers.map((vacationer, index) => (`size-4 bg-${vacationer.color} mt-1`));
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
      <ul className={cssForCols}>
        {vacationers.map((vacationer, index) => (
          <li
            key={index}
            className="border border-dashed p-4 bg-slate-100/20 hover:bg-slate-100/80"
          >
            <p>
              <span className="font-bold">Name:</span> {vacationer.name}
            </p>
            <p>
              <span className="font-bold">PTOs:</span> {vacationer.ptoDays}
            </p>
            <div className="flex flex-wrap gap-x-4">
              <p>
                <span className="font-bold">Color:</span>
              </p>
              <div className={cssForColors[index]}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
