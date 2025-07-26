import axios from "axios";

// Base API configuration
const api = axios.create({
  baseURL: "https://api-himarpl.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Export the api instance
export { api };

// Fetch department details by type and acronym
export const fetchDepartmentDetails = async (type, acronym) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/departments?type=${type}&year=2025&acronym=${acronym}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching department details:", error);
    throw error;
  }
};

export const fetchDepartmentStaff = async (departmentId) => {
  try {
    const [ketuawaketuRes, staffRes] = await Promise.all([
      axios.get(`${import.meta.env.VITE_API_URL}/users?departmentIds=${departmentId}&limit=50&positionNames=ketua%2Cwakil%20ketua&periodYears=2025`),
      axios.get(`${import.meta.env.VITE_API_URL}/users?departmentIds=${departmentId}&limit=50&positionNames=staff&periodYears=2025`),
    ]);

    const ketuawaketu = ketuawaketuRes.data || [];
    const staff = staffRes.data || [];

    const combined = [...ketuawaketu, ...staff];
    return combined;
  } catch (error) {
    console.error("Error fetching department staff:", error);
    throw error;
  }
};
