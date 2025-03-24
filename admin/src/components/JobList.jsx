import "../styles.css";

const JobList = ({ jobs, filters }) => {
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
    job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
    (filters.jobType ? job.jobType === filters.jobType : true) &&
    (job.salary >= filters.salary[0] && job.salary <= filters.salary[1])
  );
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job._id} className="job-card">
          <div className="job-header">
            <img src={job.logo} alt={job.company} className="company-logo" />
            <span className="time-badge">24h Ago</span>
          </div>

          <h3 className="job-title">{job.title}</h3>

          <div className="job-details">
            <span> {job.experience} Exp</span>
            <span> {job.location}</span>
            <span> {job.salary} LPA</span>
          </div>

          <p className="job-description">
            A user-friendly interface lets you browse stunning photos and videos.
            <br />
            Filter destinations based on interests and travel style, and create personalized plans.
          </p>

          <button className="apply-btn">Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
