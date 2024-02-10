import React, { useState } from "react";
import { TimezoneContext } from "./utils/TimezoneContext";
import Searchbar from "./components/Searchbar";
import Timezones from "./components/Timezones";
import Navbar from "./components/Navbar";
import "./styles/app.css";
const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <TimezoneContext.Provider value={{ searchValue, setSearchValue }}>
      <Navbar />
      <Timezones />
    </TimezoneContext.Provider>
  );
};

export default App;
