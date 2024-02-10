import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { AiOutlineDownload } from "react-icons/ai";
import Modal from "react-modal";
import data from "../assets/timezones.json";
import "../styles/navbar.css";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleExport = () => {
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = href;
    link.download = "timezones.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setModalIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="header-export-container">
        <h5 className="navbar-header">Global Timezone IATA codes</h5>
        <button
          onClick={() => setModalIsOpen(true)}
          className="export-timezone-button"
        >
          <AiOutlineDownload style={{ height: "100%" }} />
        </button>
      </div>
      <Searchbar />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Export Modal"
        className="Modal"
      >
        <h2>Export Timezones</h2>
        <p>Do you want to export the list of timezones?</p>
        <button onClick={handleExport}>Yes</button>
        <button onClick={() => setModalIsOpen(false)}>No</button>
      </Modal>
    </div>
  );
};

export default Navbar;
