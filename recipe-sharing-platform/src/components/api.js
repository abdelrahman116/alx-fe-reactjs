// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Fake API base URL
});

export default api;
