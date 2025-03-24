import { useState, useEffect } from "react";
import axios from "axios";
import FilterBar from "../components/FilterBar";
import JobList from "../components/JobList";
import JobFormModal from "../components/JobFormModal";
import "../styles.css";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    jobType: "",
    salary: [0, 2000],
  });

  // Fetch jobs from API
  const fetchJobs = async () => {
    try {
      const response = await axios.get("https://job-application-admin-interface.onrender.com/api/jobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Fetch jobs on initial load
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="job-page">
      <h1>Find Your Dream Job</h1>

      {/* Filter Bar Component */}
      <FilterBar filters={filters} setFilters={setFilters} />

      {/* Job List Component */}
      <JobList jobs={jobs} filters={filters} />

      {/* Create Job Button */}
      <button className="create-job-btn" onClick={() => setShowModal(true)}>
        + Create Job
      </button>

      {/* Job Form Modal */}
      <JobFormModal show={showModal} setShowModal={setShowModal} refreshJobs={fetchJobs} />
    </div>
  );
};

export default JobPage;
