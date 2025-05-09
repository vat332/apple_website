import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="bg-amber-100 p-5">
        <li></li>
        <li></li>
        <li></li>
      </div>
    </main>
  );
};

export default App;
