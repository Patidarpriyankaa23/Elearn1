import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", //  backend URL
  withCredentials: true, // allows cookies/token to be sent
});

export default axiosInstance;
