import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ActiveVacationerContext from "./ActiveVacationerContext";
import Settings from "./components/Settings";
import Calendar from "./components/Calendar";

const App = () => {
  const year = "2024";
  const vacationers = [
    {
      name: "Paty",
      ptoDays: 23,
      color: 0,
      selectedPTO: []
    },
    {
      name: "Oriol",
      ptoDays: 28,
      color: 1,
      selectedPTO: []
    },
  ];
  const activeVacationer = useState(null);
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold underline text-cyan-600 py-4">
        Vacation Planner
      </h1>
      <ActiveVacationerContext.Provider value={activeVacationer}>
        <Settings year={year} vacationers={ vacationers } />
        <Calendar vacationers={ vacationers } />
      </ActiveVacationerContext.Provider>
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
//export default App;
