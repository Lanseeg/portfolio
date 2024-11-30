const API_BASE_URL = "https://api-m4w5.onrender.com";

// Fetch all skills (public route)
export const fetchSkills = async () => {
  const response = await fetch(`${API_BASE_URL}/api/user/skills`);
  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }
  return await response.json();
};

// Fetch all jobs (public route)
export const fetchJobs = async () => {
  const response = await fetch(`${API_BASE_URL}/api/user/jobs`);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return await response.json();
};

// Fetch all trainings (public route)
export const fetchTraining = async () => {
  const response = await fetch(`${API_BASE_URL}/api/user/trainings`);
  if (!response.ok) {
    throw new Error("Failed to fetch trainings");
  }
  return await response.json();
};
