import React from "react";
import { createRoot } from "react-dom/client";
import Settings from "./components/Settings";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold underline text-cyan-600 py-4">
        Vacation Planner
      </h1>
      <Settings />
      <Calendar />
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
//export default App;
