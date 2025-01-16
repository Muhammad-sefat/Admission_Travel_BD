import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const BusSitPlan = () => {
  const [busData, setBusData] = useState([]); // Holds all bus data
  const [filteredData, setFilteredData] = useState([]); // Holds filtered data
  const [dropdownType, setDropdownType] = useState(""); // Tracks which dropdown is open
  const [filters, setFilters] = useState({ from: "", to: "", unit: "" }); // Tracks filter selections

  useEffect(() => {
    // Fetch data from JSON
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setBusData(data);
        setFilteredData(data); // Initialize filtered data
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const handleDropdownToggle = (type) => {
    // Toggle the dropdown
    setDropdownType((prev) => (prev === type ? "" : type));
  };

  const handleFilter = (type, value) => {
    // Update filters and filter data
    const updatedFilters = { ...filters, [type]: value };
    setFilters(updatedFilters);

    const newFilteredData = busData.filter((bus) => {
      return (
        (updatedFilters.from ? bus.from === updatedFilters.from : true) &&
        (updatedFilters.to ? bus.to === updatedFilters.to : true) &&
        (updatedFilters.unit ? bus.unit === updatedFilters.unit : true)
      );
    });

    setFilteredData(newFilteredData);
    setDropdownType(""); // Close dropdown
  };

  const handleReset = () => {
    // Clear filters and reset data
    setFilters({ from: "", to: "", unit: "" });
    setFilteredData(busData);
    setDropdownType("");
  };

  return (
    <div className="overflow-x-auto my-10 border rounded">
      {/* Filter Buttons */}
      <div className="bg-white text-black text-right p-2 md:flex justify-end gap-5 relative">
        {/* From Button */}
        <div className="relative">
          <button
            onClick={() => handleDropdownToggle("from")}
            className="border py-2 px-4 rounded flex gap-3 items-center"
          >
            <span>From: {filters.from || "Select"}</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {dropdownType === "from" && (
            <div className="absolute bg-white border shadow-md p-2 mt-2 z-10">
              {[...new Set(busData.map((bus) => bus.from))].map((place) => (
                <div
                  key={place}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleFilter("from", place)}
                >
                  {place}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* To Button */}
        <div className="relative">
          <button
            onClick={() => handleDropdownToggle("to")}
            className="border py-2 px-8 rounded flex items-center gap-5"
          >
            <span>To: {filters.to || "Select"}</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {dropdownType === "to" && (
            <div className="absolute bg-white border shadow-md p-2 mt-2 z-10">
              {[...new Set(busData.map((bus) => bus.to))].map((place) => (
                <div
                  key={place}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleFilter("to", place)}
                >
                  {place}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Unit Button */}
        <div className="relative">
          <button
            onClick={() => handleDropdownToggle("unit")}
            className="border py-2 px-4 rounded flex items-center gap-3"
          >
            <span>Unit: {filters.unit || "Select"}</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {dropdownType === "unit" && (
            <div className="absolute bg-white border shadow-md p-2 mt-2 z-10">
              {[...new Set(busData.map((bus) => bus.unit))].map((unit) => (
                <div
                  key={unit}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleFilter("unit", unit)}
                >
                  {unit}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Reset All Button */}
        <button
          onClick={handleReset}
          className="border py-2 px-4 bg-red-500 text-white rounded"
        >
          Reset All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-hidden">
        <table className="table table-md">
          <thead className="bg-green-700 text-white text-base">
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Unit</th>
              <th>Bus Type</th>
              <th>Journey Date</th>
              <th>Exam Date</th>
              <th>Ticket Booking</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((bus, index) => (
              <tr key={index}>
                <td>{bus.from}</td>
                <td>{bus.to}</td>
                <td>{bus.unit}</td>
                <td>{bus.busType}</td>
                <td>{bus.journeyDate}</td>
                <td>{bus.examDate}</td>
                <td>
                  <button className="border bg-red-500 text-white py-2 px-3 text-base rounded">
                    Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusSitPlan;
