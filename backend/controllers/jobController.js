import Job from "../models/Job.js";

// ➤ Create a new job
export const createJob = async (req, res) => {
  try {
    const { title, company, location, jobType, salary, description } = req.body;
    const job = new Job({ title, company, location, jobType, salary, description });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: "Error creating job" });
  }
};

// ➤ Get all jobs with filters
export const getJobs = async (req, res) => {
  try {
    const { title, location, jobType, minSalary, maxSalary } = req.query;
    let filter = {};

    if (title) filter.title = { $regex: title, $options: "i" };
    if (location) filter.location = { $regex: location, $options: "i" };
    if (jobType) filter.jobType = jobType;
    if (minSalary && maxSalary) filter.salary = { $gte: minSalary, $lte: maxSalary };

    const jobs = await Job.find(filter);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching jobs" });
  }
};
