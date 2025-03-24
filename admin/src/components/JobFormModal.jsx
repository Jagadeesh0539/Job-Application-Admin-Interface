import { useState } from "react";
import axios from "axios";
import "../styles.css";

const JobFormModal = ({ show, setShowModal, refreshJobs }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "FullTime",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // 🛑 Validate fields before submission
    if (!formData.title || !formData.company || !formData.description) {
      alert("Please fill in all required fields: Title, Company, Description");
      return;
    }

    try {
      console.log("Submitting job:", formData); // Debugging: See what is being sent

      const response = await axios.post("https://job-application-admin-interface.onrender.com/api/jobs", formData);
      console.log("Job Created:", response.data);

      if (refreshJobs) await refreshJobs(); // Await if refreshJobs is async
      setShowModal(false);
    } catch (error) {
      console.error("Error creating job:", error.response || error.message);
      alert(`Failed to create job: ${error.response?.data?.message || "Server error"}`);
    }
  };

  if (!show) return null;

  return (
    <div className="modal" onClick={() => setShowModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Create Job Opening</h2>
        <input
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <select name="jobType" value={formData.jobType} onChange={handleChange}>
          <option value="FullTime">Full-Time</option>
          <option value="PartTime">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
        <input
          name="salary"
          placeholder="Salary (LPA)"
          type="number"
          value={formData.salary}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button onClick={handleSubmit} className="publish">Publish</button>
      </div>
    </div>
  );
};

export default JobFormModal;
