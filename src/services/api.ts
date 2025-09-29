import axios from "axios";

let bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMThjNzczZjczMmJlNmI3ZGFhZTllMWZlYTZjNzgxYiIsIm5iZiI6MTc1ODI2NDgwNy4xMjcsInN1YiI6IjY4Y2NmZGU3YzRhNjJmMDljYmNmNGIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UMoGtDXOFt-f_yKjVqAaLZyZZtiHtm9tIAnQ2k0c9Bw"
const API = axios.create();

export const setAxiosConfig = (bearerToken: string) => {
  bearerToken = bearerToken;
};

API.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default API;
