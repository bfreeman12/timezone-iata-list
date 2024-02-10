import React, { useContext } from "react";
import { TimezoneContext } from "../utils/TimezoneContext";

const Searchbar = () => {
  const { setSearchValue } = useContext(TimezoneContext);

  return (
    <input
      className="searchbar"
      type="text"
      onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
      placeholder="Search timezone..."
    />
  );
};

export default Searchbar;
