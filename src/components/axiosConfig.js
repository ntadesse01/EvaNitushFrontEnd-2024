import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "https://evabackend-2024-3.onrender.com/api",
   // baseURL: "http://localhost:5500/api",
});



export default axiosBase;

