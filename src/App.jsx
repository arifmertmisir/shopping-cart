import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({});

  return (
    <>
      <Navbar />
      <Outlet context={{ input, setInput }} />
    </>
  );
}

export default App;
