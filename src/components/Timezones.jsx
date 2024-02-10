import React, { useContext } from "react";
import timezonesJson from "../assets/timezones.json";
import { TimezoneContext } from "../utils/TimezoneContext";
import "../styles/timezones.css";
const Timezones = () => {
  const { searchValue } = useContext(TimezoneContext);

  return (
    <div className="timezones-container">
      {timezonesJson
        .filter((timezone) => timezone.toLowerCase().includes(searchValue))
        .map((timezone, index) => (
          <div className="timezone-entry-container" key={index}>
            <p className="timezone-entry" key={index}>
              {timezone}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Timezones;
