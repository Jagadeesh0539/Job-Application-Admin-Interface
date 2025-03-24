import { Slider } from "@mui/material";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import "../styles.css";

const FilterBar = ({ filters, setFilters }) => {
  return (
    <div className="filter-bar">
      <div className="filter-input">
        <FaSearch className="filter-icon" />
        <input
          type="text"
          placeholder="Search By Job Title"
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
        />
      </div>

      <div className="filter-input">
        <FaMapMarkerAlt className="filter-icon" />
        <input
          type="text"
          placeholder="Preferred Location"
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
      </div>

      <div className="filter-dropdown">
        <FaBriefcase className="filter-icon" />
        <select onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}>
          <option value="">Job Type</option>
          <option value="FullTime">Full-Time</option>
          <option value="PartTime">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="salary-filter">
        <label>Salary Per Month</label>
        <Slider
          value={filters.salary}
          onChange={(e, newValue) => setFilters({ ...filters, salary: newValue })}
          valueLabelDisplay="auto"
          min={30000}
          max={100000}
          step={10}
          className="custom-slider"
        />
      </div>
    </div>
  );
};

export default FilterBar;
