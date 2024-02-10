import React from "react";
import Searchbar from "./Searchbar";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Searchbar />
      <h5 className="navbar-header">Timezone IATA locater</h5>
    </div>
  );
};

export default Navbar;
