import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://limpiar-backend.onrender.com/api/auth";


const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, 
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("🔄 Token expired, attempting refresh...");

      try {
        const refreshResponse = await axios.post(`${API_URL}/refresh-token`, {}, { withCredentials: true });
        const newToken = refreshResponse.data.token;

        if (newToken) {
          localStorage.setItem("token", newToken);
          error.config.headers.Authorization = `Bearer ${newToken}`;
          return api.request(error.config); 
        }
      } catch (refreshError) {
        console.error("🚨 Refresh token failed:", refreshError);
        localStorage.removeItem("token");
        window.location.href = "/login"; 
      }
    }
    return Promise.reject(error);
  }
);

export default api;
