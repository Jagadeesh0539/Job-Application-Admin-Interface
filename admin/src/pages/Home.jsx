import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import JobList from "../components/JobList";
import JobFormModal from "../components/JobFormModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: "", location: "", jobType: "", salary: [0, 2000000] });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await axios.get("https://job-application-admin-interface.onrender.com/api/jobs");
    setJobs(res.data);
  };

  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters} />
      <JobList jobs={jobs} />
      <JobFormModal show={showModal} setShowModal={setShowModal} refreshJobs={fetchJobs} />
    </div>
  );
};

export default Home;
