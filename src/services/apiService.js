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

export const fetchDepartmentStaff = async (departmentId, deptName) => {
  try {
    let check = false;
    if (["Sekretaris", "Bendahara"].includes(deptName)) {
      check = true;
    }

    const position = check ? "" : "staff";
    const [ketuawaketuRes, staffRes] = await Promise.all([
      axios.get(`${import.meta.env.VITE_API_URL}/users?departmentIds=${departmentId}&limit=50&positionNames=ketua%2Cwakil%20ketua&periodYears=2025`),
      axios.get(`${import.meta.env.VITE_API_URL}/users?departmentIds=${departmentId}&limit=50&positionNames=${position}&periodYears=2025`),
    ]);

    const ketuawaketu = ketuawaketuRes.data.data || [];
    const staff = staffRes.data.data || [];

    const combined = [...ketuawaketu, ...staff];
    console.log(combined);
    return combined;
  } catch (error) {
    console.error("Error fetching department staff:", error);
    throw error;
  }
};
