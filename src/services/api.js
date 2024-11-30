const API_BASE_URL = "https://api-m4w5.onrender.com";

// Fetch all skills (public route) with language support
export const fetchSkills = async (language = "en") => {
  const response = await fetch(`${API_BASE_URL}/api/user/skills?lang=${language}`);
  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }
  return await response.json();
};

// Fetch all jobs (public route) with language support
export const fetchJobs = async (language = "en") => {
  const response = await fetch(`${API_BASE_URL}/api/user/jobs?lang=${language}`);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  const data = await response.json();

  // Map _id to id and format the job data
  return data.map((job) => ({
    id: job._id,
    position: job.title, // Use `title` as `position`
    company: job.company,
    years: `${new Date(job.startDate).getFullYear()} - ${new Date(job.endDate).getFullYear()}`,
    description: job.description, // Keep description if needed later
  }));
};

// Fetch all trainings (public route) with language support
export const fetchTraining = async (language = "en") => {
  const response = await fetch(`${API_BASE_URL}/api/user/trainings?lang=${language}`);
  if (!response.ok) {
    throw new Error("Failed to fetch trainings");
  }
  return await response.json();
};
